<!DOCTYPE html>
<html>
<head>
	<title>Reel Findr: Your Results!</title>
	<!-- favicon-->
	<link rel="icon" type="image/png" href="img/favicon.png">

	<!--font-->
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>

	<!--files we've made-->
	<link rel="stylesheet" href="css/style.css">

	<!--frameworks we're using-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- arrows that appear when scrolling on hover-->
	<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<div class="container">
		<div class="top">
			<header>
				<div class="toggle">
					<div id="mTitle"><h1>REEL<span>FINDR</span></h1></div>
					<div id="mRestart" onClick="goBack()"><h1>START<span>OVER</span></h1></div>
				</div>
			</header>
		</div>

		<?php
			//start PHP
			session_start();

			//check if variables exist (they should) and if so, set a variable to their value
			if( isset($_GET) && isset($_GET['genre']) ) {
					$genre = $_GET['genre'];
			}

			if( isset($_GET) && isset($_GET['minYear']) ) {
				$minYear = $_GET['minYear'];
			}

			if( isset($_GET) && isset($_GET['maxYear']) ) {
				$maxYear = $_GET['maxYear'];
			}

			if( isset($_GET) && isset($_GET['sfx']) ) {
				$sfx = $_GET['sfx'];
			}

			if( isset($_GET) && isset($_GET['pg']) ) {
				$pg = $_GET['pg'];
			}
			//in total we pull 5 values from the user's input.

			//connect to the database (the db file is linked)
			$db = new PDO('mysql:host=localhost;dbname=reelfindr;charset=utf8','root','root');
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

			//prepare the SQL statement to find the movies desired
			//we assume all of these will have a value
			$sql = "SELECT * FROM movies WHERE"; //main statement that always exists

			//if all, we do not allow it to specify a genre
			//otherwise, grab any movies with the specified genre
			if ($genre != 'all'){
				$sql = $sql . " genre LIKE '%$genre%' AND";
			}

			//both of these are always set, so we can go ahead and check if the movies chosen are between
			//the desired years and whether or not they have a focus on special effects.
			$sql = $sql . " year BETWEEN $minYear AND $maxYear";

			if ($sfx != 'either'){
				 $sql = $sql . " AND spFx = '$sfx'";
			}

			//if there are kids around, we only want to show kid friendly movies (cutting R rated movies out)
			//if there are no kids around, we still show the movies that kids can watch, because adults can watch kids' movies
			//so if NO, this statement becomes irrelevant
			if ($pg == "yes"){
				$sql = $sql. " AND pg = '$pg'";
			}

			//the movies are ordered by year, ascending
			$sql = $sql. " ORDER BY year";

			$stmt = $db->prepare( $sql );
			$stmt->bindParam( ':gnre', $genre );
			$stmt->bindParam( ':spFx', $minYear );
			$stmt->bindParam( ':minyr', $maxYear );
			$stmt->bindParam( ':maxyr', $sfx );
			$stmt->bindParam( ':pg', $pg );

			$stmt->execute();
			$result = $stmt->fetchAll( PDO::FETCH_OBJ );
		?>

		<div class='content'>
				<div class='results'>

					<?php
						if (!$result){ //if no results
							echo "<h1>sorry</h1>";
							echo "<h2>we don't have a movie for you!</h2>";
							echo "<input type='button' onClick='goBack()' class='button' id='year' value='TRY AGAIN?'>";
						}

						else{ //otherwise store results in the div using data
							//display the scrollers
							echo "<div class='scroller'>";
								echo	"<div class='scroll right'>";
								echo	"<i class='fa fa-chevron-circle-right'></i>";
								echo	"</div>";
								echo	"<div class='scroll left'>";
								echo	"<i class='fa fa-chevron-circle-left'></i>";
								echo	"</div>";

							//make the items div
							echo	"<div class='items' id='items'>";

								//loop through and create each individual item depending on how many movies are found
								foreach( $result as $item ) {
									echo	"<div class='item'";
										echo " data-title ='".$item->title."'";
										echo " data-year ='".$item->year."'";
										echo " data-director ='".$item->director."'";
										echo ' data-sum ="'.$item->summary.'">';
										echo "<img src=".$item->imageUrl. ">";
									echo "</div>"; //end of item
								}
								echo "</div>"; //end of items
							echo "</div>"; //end of scroller
						}
						session_destroy(); //end the session
					?>

					<!-- our JS code-->
					<script src='js/scroller.js'></script>
				<!-- end of results-->
				</div>
			<!-- end of content-->
			</div>

		<div class="footer">
			<footer>
				<p class="foot">
					<!-- social media share links-->
					<a href="http://www.facebook.com/share.php?u=http://reel-findr.com/"><img src="img/facebook.png"></a>
					<a href="http://ctt.ec/4dNIa" target="_blank"><img src="img/twitter.png"></a>
					<a href="https://plusone.google.com/_/+1/confirm?hl=en&url=http%3A%2F%2F%20http://reel-findr.com/" target="_blank"><img src="img/google.png"></a>
				</p>
			</footer>
		</div>

	</div>
</body>
</html>

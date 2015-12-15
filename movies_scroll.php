<!DOCTYPE html>
<head>
	<title>PHP Quiz</title>
	<link rel='stylesheet' href='css/style.css' />
	<link rel="icon" type="image/png" href="img/favicon.png">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>
	<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</head>

<body>
	<div class="container">
		<div class="top">
			<header><h1>REEL<span>FINDR<span></h1></header>
		</div>

			<?php
				ini_set( 'display_errors', 1 );
				ini_set( 'display_errors', 1 );
				ini_set( 'display_startup_errors', 1 );

				$db = new PDO('mysql:host=localhost;dbname=reelfindr;charset=utf8','root','root');
				$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

				if( isset($_GET) && isset($_GET['minYear']) && isset($_GET['maxYear']))  {
																 $miny = $_GET['minYear'];
																 $maxy = $_GET['maxYear'];
														 }
				 if( isset($_GET) && isset($_GET['sfx']) )  {
				  											$spFx = $_GET['sfx'];
				 										}
				//capture user input

				$sql = "SELECT * FROM movies WHERE TRUE ";
				// if( isset($_GET) && isset($_GET['genre']) && isset($_GET['sfx']) && isset($_GET['plot']) ) {
				// $sql .= "AND genre =:gnre
				// 				AND spFx=:spFx
				// 				AND thoghtPr=:plt
				// 				AND year BETWEEN :minyr
				// 				AND :maxyr ORDER BY year ASC" ;
				// }
 //$$ $_GET['genre']!='all';
$var=1;
//dump out connection info
// var_dump( $db );
echo "<br/>";

$stmt = $db->prepare( $sql );
$stmt->bindParam( ':gnre', $_GET['genre'] );
$stmt->bindParam( ':spFx', $_GET['sfx'] );
$stmt->bindParam( ':minyr', $_GET['minYear'] );
$stmt->bindParam( ':maxyr', $_GET['maxYear'] );
$stmt->bindParam( ':plt', $_GET['plot'] );
​
​
// $stmt->bindParam( ':sfx', $_GET['spFx'] );
​
// $stmt->debugDumpParams();
$stmt->execute();
$result = $stmt->fetchAll( PDO::FETCH_OBJ );
// 	return $result->fetchAll( PDO::FETCH_ASSOC );
// }
​
// var_dump($result);
				?>
			<div class='content'>
				<div class='results'>
					<?php
					echo "<div class='scroller'>";
								echo	"<div class='scroll right'>";
								echo	"<i class='fa fa-chevron-circle-right'></i>";
								echo	"</div>";
									echo	"<div class='scroll left'>";
									echo	"<i class='fa fa-chevron-circle-left'></i>";
									echo	"</div>";
							echo	"<div class='items'>";
								foreach( $result as $item ) {
												echo	"<div class='item'";
												echo " data-title ='".$item->title."'";
												echo " data-year ='".$item->year."'";
												echo " data-genre ='".$item->genre."'";
												echo ">";
												echo $item->genre. "  " ;
												echo $item->title. "  " ;
												echo $item->year. "  " ;
												echo $item->spFx. "  " ;
												echo $item->thoghtPr. "  " ;
												echo $item->imageUrl. "  ";
												echo "</div>";
		​
										}
												echo "</div>";
					echo "</div>";
				// echo "<label for='chk".$item->mid."'>".$item->name."</label>";
				?>
			</div>
		<div class="footer">
			<footer>
				<p class="foot">
					<a href="http://www.facebook.com/share.php?u=http://reel-findr.com/"><img src="img/facebook.png"></a>
					<a href="http://ctt.ec/4dNIa" target="_blank"><img src="img/twitter.png"></a>
					<a href="https://plusone.google.com/_/+1/confirm?hl=en&url=http%3A%2F%2F%20http://reel-findr.com/" target="_blank"><img src="img/google.png"></a>
				</p>
			</footer>
		</div>
	</div>
</body>
</html>

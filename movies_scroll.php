<!DOCTYPE html>
<head>
<title>PHP Quiz</title>
<link rel='stylesheet' href='css/movies.css' />
<link rel='stylesheet' href='css/scroller.css' />

</head>

<body>

<div class="top">
	<header><h1>REEL<span>FINDR<span></h1></header>
</div>

<?php
ini_set( 'display_errors', 1 );
ini_set( 'display_errors', 1 );
ini_set( 'display_startup_errors', 1 );
// echo 'Hello PDO!!!!<br/><br/>';

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


//dump out connection info
// var_dump( $db );
echo "<br/>";

$stmt = $db->prepare( $sql );
$stmt->bindParam( ':gnre', $_GET['genre'] );
$stmt->bindParam( ':spFx', $_GET['sfx'] );
$stmt->bindParam( ':minyr', $_GET['minYear'] );
$stmt->bindParam( ':maxyr', $_GET['maxYear'] );
$stmt->bindParam( ':plt', $_GET['plot'] );


// $stmt->bindParam( ':sfx', $_GET['spFx'] );

// $stmt->debugDumpParams();
$stmt->execute();
$result = $stmt->fetchAll( PDO::FETCH_OBJ );
// 	return $result->fetchAll( PDO::FETCH_ASSOC );
// }

// var_dump($result);
echo "<div class='container'>";
	echo "<div class='scroller'>";
				echo	"<div class='scroll right'>";
				echo	"<i class='fa fa-chevron-circle-right'></i>";
				echo	"</div>";
					echo	"<div class='scroll left'>";
					echo	"<i class='fa fa-chevron-circle-left'></i>";
					echo	"</div>";
			echo	"<div class='items'>";
						foreach( $result as $item ) {
										echo	"<div class='item'>";
										echo $item->genre. "  " ;
										echo $item->title. "  " ;
										echo $item->year. "  " ;
										echo $item->spFx. "  " ;
										echo $item->thoghtPr. "  " ;
										echo "</div>";
								}
								echo "</div>";
	echo "</div>";
// echo "<label for='chk".$item->mid."'>".$item->name."</label>";
echo "</div>";

echo "<br/><br/>";
// echo 'Hello PDO3!<br/><br/>';
echo "<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>";
echo "<script src='js/scroller.js'></script>";
?>
</body>
</html>

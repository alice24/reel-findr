<?php
ini_set( 'display_errors', 1 );
ini_set( 'display_errors', 1 );
ini_set( 'display_startup_errors', 1 );
echo 'Hello PDO!<br/><br/>';

$db = new PDO('mysql:host=localhost;dbname=reelfindr;charset=utf8','root','root');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

//capture user input
$sql = "SELECT * FROM movies WHERE TRUE ";
if( isset($_GET) && isset($_GET['genre']) && isset($_GET['year']) ) {
	$sql .= "AND genre=:gnre AND year=:year";
	// $sql .= "AND year=:year";
}
//  if( isset($_GET) && isset($_GET['year']) ) {
// 	$sql .= "AND year=:year";
// }

// bind
//execute
// echo $sql;
// exit(0);
// create a PDO (PHP Data Object


//dump out connection info
// var_dump( $db );
echo "<br/>";

$stmt = $db->prepare( $sql );
$stmt->bindParam( ':gnre', $_GET['genre'] );
$stmt->bindParam( ':year', $_GET['year'] );
// $stmt->debugDumpParams();
$stmt->execute();
$result = $stmt->fetchAll( PDO::FETCH_OBJ );
// 	return $result->fetchAll( PDO::FETCH_ASSOC );
// }

// var_dump($result);

foreach( $result as $item ) {
	echo "<div class='container'>";
	echo $item->genre. "  " ;
	echo $item->title. "  " ;
	echo $item->year. "  " ;
	// echo "<label for='chk".$item->mid."'>".$item->name."</label>";
	echo "</div>";
}


echo "<br/><br/>";
echo 'Hello PDO3!<br/><br/>';
?>

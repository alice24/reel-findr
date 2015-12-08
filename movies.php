<?php
ini_set( 'display_errors', 1 );
ini_set( 'display_errors', 1 );
ini_set( 'display_startup_errors', 1 );
echo 'Hello PDO!<br/><br/>';
echo ($_GET['genre']);

$print="SELECT * FROM `movies` WHERE `genre`='drama' ORDER BY `mid` DESC";
echo($print);

//capture user input
$sql = 'SELECT * FROM `movies` WHERE TRUE ';
if( isset($_GET) && isset($_GET['genre']) ) {
	$genre=$_GET['genre'];
	$sql += `genre` LIKE 'drama';
	echo ($sql);

	$result = $db->query( $genre );
	return $result->fetchAll( PDO::FETCH_ASSOC );
}

$db = new PDO('mysql:host=localhost;dbname=reelfindr;charset=utf8','root','root');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
echo ($db);

// bind

//execute

echo $sql;
echo 'Hello PDO2!<br/><br/>';

exit(0);

// create a PDO (PHP Data Object


//dump out connection info
echo "<br/><br/>";

var_dump( $db );
echo "<br/><br/>";


//
// //inserts into the column "name" in table bsauga
// $sql = "INSERT INTO `bsauga` (`name`,`email`,`twitter`,`highest level`,`availability`,`areas`,`phone`,`postal code`,`comments`) VALUES (:na,:em,:tw,:lv,:av,:ar,:ph,:pc,:cm)";



//
// // prepare for sanitization
// $stmt = $db->prepare($sql);
// // bind parameters
// $stmt->bindParam(':na', $name);
// $stmt->bindParam(':em', $email);
// $stmt->bindParam(':tw', $twitter);
// $stmt->bindParam(':lv', $level);
// $stmt->bindParam(':av', $avail);
// $stmt->bindParam(':ar', $area);
// $stmt->bindParam(':ph', $phone);
// $stmt->bindParam(':pc', $postal);
// $stmt->bindParam(':cm', $comments);
// $stmt->execute();


?>

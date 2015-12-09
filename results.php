<!DOCTYPE html>
<html>
<head>
	<title>Reel Findr</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="icon" type="image/png" href="img/favicon.png">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' rel='stylesheet' type='text/css'>
	<script src='js/script.js'></script>	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<div class="container">
		<div class="top">
			<header><h1>REEL-FINDR</h1></header>
		</div>

		<div></div>
		
		<div class="content">
			<section>
				<?php
					echo "<h2>";
					echo "Genre: <b>" . $_GET['genre'] . "</b>";
					echo "</h2>";

					echo "<h2>";			
					echo "Decade: <b>" . $_GET['decade'] . "</b>";
					echo "</h2>";
					
					echo "<h2>";			
					echo "SFX: <b>" . $_GET['sfx'] . "</b>";
					echo "</h2>";
				?>
			</section>
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
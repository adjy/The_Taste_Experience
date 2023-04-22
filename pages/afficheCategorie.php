<?php
session_start();
require_once "../config.php";


require $GLOBALS['PHP_DIR'] . "class/Autoloader.php";
Autoloader::register();

use recette\Template;
use recette\Affichages;
use recette\Donnees;

$gdb = new Donnees() ;
$affiche = new Affichages();
$recettes = $gdb->getRecettes();
$Listestag = $gdb->getListesTagRecettes();
$tags = $gdb->getTagRecettes();

ob_start();
?>
    <script src="../Javascript/main.js" ></script>
    <link rel="stylesheet" href="../css/main.css">
<?php

if(isset($_POST['Id_Tag'])){
    $affiche->AfficherParCategorie($_POST['Id_Tag'],$Listestag,$tags,$recettes);
}




$content = ob_get_clean();
Template::render($content, $title = "Ajout Donnees");

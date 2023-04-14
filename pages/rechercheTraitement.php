<?php
require_once "../config.php" ;
session_start();

require $GLOBALS['PHP_DIR']."class/Autoloader.php";
Autoloader::register();
use recette\Recette;

$recette = new Recette();
if(isset($_POST['fname']) ){
    $termes = htmlspecialchars($_POST['fname'] );
    //var_dump($termes);
    $recherche = $recette->rechercheTerme($termes);
    $_SESSION['rechercheRecette'] = $recherche;
    header("Location:".$GLOBALS['DOCUMENT_DIR']."index.php");
    exit();
}
<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

$rows = array();

//Active Patients
$result = $conn->prepare("SELECT * FROM patient WHERE StatusId = ?");
$result->execute(array(1));
$counts = new Counts();
$counts->key ="patient";
$counts->value =$result->rowCount();
$rows[]= $counts;


//Active Appointments
$result = $conn->prepare("SELECT * FROM appointment WHERE StatusId = ?");
$result->execute(array(1));
$counts = new Counts();
$counts->key ="appointment";
$counts->value =$result->rowCount();
$rows[]= $counts;


//Awaiting Approval Appointments
$result = $conn->prepare("SELECT * FROM appointment WHERE StatusId = ?");
$result->execute(array(5));
$counts = new Counts();
$counts->key ="awaiting-appointment";
$counts->value =$result->rowCount();
$rows[]= $counts;

//Archived Appointments
$result = $conn->prepare("SELECT * FROM appointment WHERE StatusId = ?");
$result->execute(array(2));
$counts = new Counts();
$counts->key ="archived-appointment";
$counts->value =$result->rowCount();
$rows[]= $counts;


echo json_encode($rows);
?>

<?php
    class Counts 
    {
         public $key ;
         public $value;
    }          
?>
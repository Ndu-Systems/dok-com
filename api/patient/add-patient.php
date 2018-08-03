<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Email) ){  
 $Email 	= $data->Email;
 $FirstName = $data->FirstName;
 $Surname 	= $data->Surname; 
 $City 	= $data->City;
 $Cellphone 	= $data->Cellphone;
 $Status 	= $data->Status;
 $RowState = 1;

$result = $conn->prepare("SELECT * FROM patient WHERE Email = ?"); 
$result->execute(array($Email));
if ($result->rowCount() == 0) {
$result = $conn->prepare("
INSERT INTO  patient (  FirstName ,  Surname ,  Email ,  Cellphone ,  City ,  GlobalKey ,  Status ,  RowState ) VALUES 
(?,?,?,?,?,UUID(),?,?)
"); 
if($result->execute(array($FirstName,$Surname,$Email,$Cellphone,$City,$Status,$RowState ))){
    echo 1;
}else{
	echo json_encode("error while trying create tenant, please try again");
}		

	
}else{
	
	echo json_encode("This Patient Already Exist In The System, Please Contact System Administrator");
}       
 
}
 else {

	echo json_encode( "500");
}
?>
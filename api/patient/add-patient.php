<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Email) )
{  
	$Email 	= $data->Email;
	$FirstName = $data->FirstName;
	$Surname 	= $data->Surname; 
	$City 	= $data->City;
	$Cellphone 	= $data->Cellphone;  
	$AddressLine1 	= $data->AddressLine1; 
	$AddressLine2 	= $data->AddressLine2; 
	$AddressLine3 	= $data->AddressLine3; 
	$City 	= $data->City; 
	$PostCode 	= $data->PostCode; 
	$IdNumber = $data->IdNumber; 
	$DOB =$data->DOB;
	$Gender =$data->Gender;
	$CreateUserId 	= 1; 
	$ModifyUserId 	= 1; 
	$StatusId = 1;

	$result = $conn->prepare("SELECT * FROM patient WHERE Email = ?"); 
	$result->execute(array($Email));
		if ($result->rowCount() == 0) 
		{
				$result = $conn->prepare("INSERT INTO patient(PatientId,  FirstName, Surname,IdNumber, DOB, Gender, Email,Cellphone, AddressLine1, AddressLine2, AddressLine3, City, PostCode, GlobalKey, CreateUserId, CreateDate, ModifyUserId, ModifyDate, StatusId) 
												VALUES (uuid(), ?,?,?,?,?,?,?,?,?,?,?,?,UUID(),?,now(),?,now(),?)"); 
				if($result->execute(array($FirstName,$Surname,$IdNumber,$DOB,$Gender,$Email,$Cellphone, $AddressLine1, $AddressLine2, $AddressLine3, $City,$PostCode,$CreateUserId,$ModifyUserId,$StatusId ))){
					echo 1;
				}
				else{
					echo json_encode("error while trying create patient, please try again");
				}		
		}
		else{
			
			echo json_encode("This Patient Already Exist In The System, Please Contact System Administrator");
		}       
	
}
else 
{

	echo json_encode( "500");
}
?>
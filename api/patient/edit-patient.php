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
    $GlobalKey= $data->GlobalKey;  
    $ModifyUserId= $data->ModifyUserId;
  
    $StatusId= $data->StatusId;

	$result = $conn->prepare("SELECT * FROM patient WHERE GlobalKey = ?"); 
	$result->execute(array($GlobalKey));
		if ($result->rowCount() == 1) 
		{
                $result = $conn->prepare("                
                UPDATE patient SET                     
                    FirstName = ?,
                    Surname = ?,
                    Email = ?,
                    Cellphone = ?,
                    AddressLine1 = ?,
                    AddressLine2 = ?,
                    AddressLine3 = ?,
                    City = ?,
                    PostCode = ?,
                    ModifyUserId = ?,
                    ModifyDate = Now(),
                    StatusId = ? 
                    WHERE GlobalKey = ?
                "); 
				if($result->execute(array($FirstName,$Surname,$Email,$Cellphone, $AddressLine1, $AddressLine2, $AddressLine3, $City,$PostCode,$ModifyUserId,$StatusId, $GlobalKey ))){
					echo 1;
				}
				else{
					echo json_encode("error while trying update patient, please try again");
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
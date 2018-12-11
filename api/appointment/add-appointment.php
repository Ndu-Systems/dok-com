<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->PatientId) )
{  
	$PatientId = $data->PatientId;
	$StartDate = $data->StartDate;
	$EndDate = $data->EndDate;
	$FromTime = $data->FromTime;
	$ToTime = $data->ToTime;
	$Description = $data->Description;
	$CreateUserId = 1;
 	$ModifyUserId = 1;
 	$StatusId = 1;
 

		$result = $conn->prepare("INSERT INTO appointment ( PatientId, StartDate, EndDate,FromTime,ToTime, Description, CreateUserId, CreateDate, ModifyUserId, ModifyDate, StatusId) 
		VALUES (?, ?, ?, ?,?, ?, ?, CURRENT_TIMESTAMP, ?, CURRENT_TIMESTAMP, ?)"); 
		if($result->execute(array( $PatientId, $StartDate, $EndDate,$FromTime,$ToTime, $Description, $CreateUserId, $ModifyUserId, $StatusId))){
			echo 1;
		}
		else{
			echo json_encode("error while trying create appointment, please try again");
		}
		
}
else 
{
	echo json_encode( "500");
}
?>
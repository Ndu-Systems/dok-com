<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->PatientId) )
{  
    $AppointmentId = $data->AppointmentId;
	$PatientId = $data->PatientId;
	$StartDate = $data->StartDate;
	$EndDate = $data->EndDate;
	$FromTime = $data->FromTime;
	$ToTime = $data->ToTime;
	$Description = $data->Description;
    $CreateUserId = $data->CreateUserId;
    $CreateDate = $data->CreateDate;
 	$ModifyUserId = $data->ModifyUserId;
 	$StatusId = $data->ToTime;  
    $StatusId= $data->StatusId;

	$result = $conn->prepare("SELECT * FROM appointment WHERE AppointmentId = ?"); 
	$result->execute(array($AppointmentId));
		if ($result->rowCount() == 1) 
		{
                $result = $conn->prepare("                
                UPDATE appointment SET             
                PatientId=?,
                StartDate=?,
                EndDate=?,
                FromTime=?,
                ToTime=?,
                Description=?,
                CreateUserId=?,
                CreateDate=?,
                ModifyUserId=?,
                ModifyDate=now(),
                StatusId=?
                WHERE AppointmentId = ?
                "); 
				if($result->execute(array(
                    $PatientId,
                    $StartDate,
                    $EndDate,
                    $FromTime,
                    $ToTime,
                    $Description,
                    $CreateUserId,
                    $CreateDate,
                    $ModifyUserId,
                    $StatusId,
                    $AppointmentId
                ))){
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
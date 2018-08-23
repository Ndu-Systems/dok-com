<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));         
							
if (isset($data->Email) ){  
	$Password  = $data->Password;              
	$Email     = $data->Email;  
    $ModifyUserId = $data->UserId;

   
   $result = $conn->prepare("SELECT * FROM user WHERE Email = ?"); 
   $result->execute(array($Email));
   if ($result->rowCount() == 1) {
   
   $result = $conn->prepare("
   UPDATE user 
   SET Password = ?,
   ModifyUserId = ?,
   ModifyDate = now()
   WHERE Email = ?
   "); 
   if($result->execute(array($Password,$ModifyUserId,$Email))){
	   echo 1;
   }else{
	   echo json_encode("error while trying to update password please try again");
   }   
	   
   }else{
	   
	   echo json_encode("Your account Does Not Exist, Please Contact System Administrator");
   }        
	
   }
	else {
   
	   echo json_encode( "500");
   }	
?>



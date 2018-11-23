<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->name)) {
    $name          = $data->name;
    $description          = $data->name;
    $StatusId          = 1;

    $check = $conn->prepare("SELECT * FROM medication WHERE name = ?");
    $check->execute(array(
        $name
    ));
    if ($check->rowCount() > 0) {
        die(json_encode('MEDICATION_EXIST'));
    }
    
    $result = $conn->prepare("INSERT INTO medication( name, description, createdate, StatusId) 
                                                VALUES (?,?,now(),?)");
    if ($result->execute(array(
        $name,
        $description,
        $StatusId
    ))) {
        echo $conn->lastInsertId();

    } else {
        echo json_encode("error while trying to create medication, please try again");
    }
    
    
} else {
    
    echo json_encode("500");
}
?>
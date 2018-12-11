<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));
if (isset($data->patientId)) {
    $patientId = $data->patientId;
    $diagnosis = $data->diagnosis;
    $boolPreasure = $data->boolPreasure;
    $pulseRate = $data->pulseRate;
    $drugs = $data->drugs;
    $StatusId          = 1;


    $result = $conn->prepare("INSERT INTO  prescription(patientId, diagnosis, boolPreasure, pulseRate,createdate,StatusId) 
                                                VALUES (?,?,?,?,now(), ?)");
    if ($result->execute(array(
        $patientId,
        $diagnosis,
        $boolPreasure,
        $pulseRate,
        $StatusId
    ))) {
        $prescriptionId = $conn->lastInsertId();

        //run a loop and insert  to 
        foreach ($drugs as $drug) {
            $result_drug = $conn->prepare("INSERT INTO  prescription_medication_drug
            (prescriptionId, medicationId, unit, dosage, createdate, StatusId) 
            VALUES (?,?,?,?,now(), ?)");

            if ($result_drug->execute(array($prescriptionId, $drug->medicationId, $drug->unit, $drug->dosage, 1))) {
                $done = true;
            } else {
                echo json_encode("prescription_medication_drug_error");
            }
        }
        echo 1;

    } else {
        echo json_encode("error while trying to create medication, please try again");
    }


} else {

    echo json_encode("500");
}
?>
<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";


$rows  = array();
$UserId =$_GET['UserId'];
if(isset($UserId)){
    $result    = $conn->prepare("select * from prescription where patientId=?");
    $result->execute(array(
       $UserId
    ));
    if ($result->rowCount() > 0) {
        while ($row = $result->fetch(PDO::FETCH_OBJ)) {
            

    $prescription = new Prescription();
    $prescription->prescriptionId = $row->prescriptionId;
    $prescription->patientId = $row->patientId;
    $prescription->diagnosis = $row->diagnosis;
    $prescription->boolPreasure = $row->boolPreasure;
    $prescription->pulseRate = $row->pulseRate;
    $prescription->createdate = $row->createdate;

	$prescription->GetDrugs($conn);
    // $prescription->GetUser($conn);
    
    $rows[] = $prescription;
        }
    }

}
echo json_encode($rows);


 class Prescription {
    public $prescriptionId;
    public $patientId;
    public $diagnosis;
    public $boolPreasure;
    public $pulseRate;
    public $createdate;

    public $drugs;
    public $patient;
    public $notes;

    function GetDrugs($conn){
        $statement    = $conn->prepare("
        select * from prescription_medication_drug inner join  medication on prescription_medication_drug.medicationId =  medication.medicationId
        where prescription_medication_drug.prescriptionId = ?");
        $statement->execute(array(
            $this->prescriptionId
        ));
        $results = $statement->fetchAll(PDO::FETCH_OBJ);
        $this->drugs= $results;
    }
    
    function GetUser($conn){
        $statement = $conn->prepare("SELECT * FROM patient where PatientId = ?");
        $statement->execute(array($this->patientId));
         $results = $statement->fetchAll(PDO::FETCH_OBJ);
       $this->patient= $results;
    }

}



?>
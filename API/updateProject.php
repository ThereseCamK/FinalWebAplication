<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../classes/project.class.php';
include_once '../classes/db.class.php';

$databaseUpdate = new db();
$dbUpdate = $databaseUpdate->connection();

$updateProItem = new project($dbUpdate);

$updateData = json_decode(file_get_contents("php://input"));

$updateProItem->id = $updateData->id;

$updateProItem->projectName = $updateData->projectName;
$updateProItem->content = $updateData->content;
$updateProItem->link = $updateData->link;

if($updateProItem->updateProject()){
    echo json_encode("Prosjekt oppdatert!");
}
else {
    echo json_encode("pjosjekt kunne ikke oppdateres");
}
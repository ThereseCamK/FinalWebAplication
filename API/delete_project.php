<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../classes/db.class.php';
include_once '../classes/project.class.php';

$database = new db();
$db = $database->connection();

$item = new project($db);

$data = json_decode(file_get_contents("php://input"));

$item->id = $data->id;

if($item->deleteOneProject()){
    echo json_encode("Prosjekt slettet");
} else echo json_encode("Kunne ikke slette prosjekt");


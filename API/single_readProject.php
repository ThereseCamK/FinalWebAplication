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

$singleProjectitem = new project($db);
$singleProjectitem->id = isset($_GET['id']) ? $_GET['id'] : die();

$singleProjectitem->getSingleProject();

if($singleProjectitem != null){
    $pro_arr = array(
        "id" =>$singleProjectitem->id,
        "projectName"=>$singleProjectitem->projectName,
        "content"=>$singleProjectitem->content,
        "link"=>$singleProjectitem->link

    );

    http_response_code(200);
    echo json_encode($pro_arr);

}
else {
    http_response_code(404);
    echo json_encode("Prosjekt ikke Funnet");
}

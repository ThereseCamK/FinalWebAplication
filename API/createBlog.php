<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../classes/db.class.php';
include_once '../classes/blog.class.php';

$database = new db();
$db = $database->connection();

$item = new blog($db);

$data = json_decode(file_get_contents("php://input"));

$item->title = $data->title;
$item->description = $data->description;
$item->file = $data->file;
$item->created = date('d-m-Y H:i:s');

if($item->createNewBlog()){
    echo 'Ny blogg laget';
}
else {
    echo 'Kunne ikke lage ny blogg';
}


<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../classes/db.class.php';
include_once '../classes/blog.class.php';


$database = new db();
$db = $database->connection();

$items = new blog($db);

$stmt = $items->getAllBlogs();
$itemCount = $stmt->rowCount();



if($itemCount > 0){

    $blogArr = array();
    $blogArr["body"] = array();


    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        if (!empty($title) && !empty($id) && !empty($description) && !empty($created) ) {
                $e = array(
                    "id" =>$row['id'],
                    "title" => $row['title'],
                    "description" => $row['description'],
                    "file" => empty($row['file']) ? null : $row['file'],
                    "created" => $row['created'],

                );

        }

        array_push($blogArr["body"], $e);
    }
    echo json_encode($blogArr);
}

else{
    http_response_code(404);
    echo json_encode(
        array("message" => "Ingen liste finnes.")
    );

}



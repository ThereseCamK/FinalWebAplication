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

echo json_encode($itemCount);

if($itemCount > 0){

    $blogArr = array();
    $blogArr["body"] = array();
    $blogArr["itemCount"] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        if (!empty($title) && !empty($description)) {
                $e = [
                    "title" => $title,
                    "description" => $description,

                ];

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
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../classes/db.class.php';
include_once '../classes/project.class.php';

$database = new db();
$db = $database->connection();

$projectItems = new project($db);

$projectStmt = $projectItems->getAllProjects();
$projectCount = $projectStmt->rowCount();

if($projectCount > 0){

    $proArr = array();
    $proArr["body"] = array();


    while ($projectRow = $projectStmt->fetch(PDO::FETCH_ASSOC)){
        extract($projectRow);

        if (!empty($projectName) && !empty($content) && !empty($link)) {
            $e = [
                "projectName" => $projectName,
                "content" => $content,
                "link" => $link

            ];

        }

        array_push($proArr["body"], $e);
    }
    echo json_encode($proArr);
}

else{
    http_response_code(404);
    echo json_encode(
        array("message" => "Ingen liste finnes.")
    );
}

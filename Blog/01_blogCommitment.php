<?php
$inputJson = file_get_contents('php://input');
$input = json_decode($inputJson);
$returnValue = new stdClass();
if (
    is_object($input)
    && property_exists($input, 'title')
    && property_exists($input, 'description')
) {
    $title = $input->title;
    $description = $input->description;
    $returnValue->title = $title;
    $returnValue->description = $description;

} else {
    $returnValue->errorMessage = "Angi URL-parametre, title and description";
    $returnValue->isError = true;
}
echo json_encode($returnValue);



<?php
$inputJson = file_get_contents('php://input');
$input = json_decode($inputJson);
$returnValue = new stdClass();

if(
    is_object($input)
    && property_exists($input , 'projectName')
    && property_exists($input, 'content')
    && property_exists($input, 'link')
){
    $projectName = $input->projectName;
    $content = $input->content;
    $link = $input->link;
    $returnValue ->projectName = $projectName;
    $returnValue ->content = $content;
    $returnValue ->link = $link;

} else {

    $returnValue->errorMessage = "Angi prosjektNavn, innhold og link";
    $returnValue->isError = true;
}
echo json_encode($returnValue);

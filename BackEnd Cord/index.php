<?php
require "connection.php";
$loginDetails = json_decode(file_get_contents("php://input"));



$search_user = Database::search("SELECT * FROM `user` WHERE `mobile_no` = '".$loginDetails->username."' AND `password` = '".$loginDetails->password."'");
if($search_user->num_rows==1){

    $exsist_user = $search_user->fetch_assoc();

    
    $user = new stdClass();
    $user->id = $exsist_user["id"];
    $user->first_name = $exsist_user["f_name"];
    $user->last_name = $exsist_user["l_name"];
    $user->mobile = $exsist_user["mobile_no"];
    $user->password = $exsist_user["password"];
    
    echo json_encode($user);

}else{
    $user = new stdClass();
    $user->first_name = "nope";
    echo json_encode($user);
    
}

?>
<?php

require "connection.php";
$search_usertype = Database::search("SELECT * FROM `user_type`");
$usertype_list = array(); 

while ($usertype = $search_usertype->fetch_assoc()) {
    $ut = new stdClass();
    $ut->id = $usertype["id"];
    $ut->name = $usertype["name"];
    
    $usertype_list[] = $ut; 
}

echo json_encode($usertype_list); 

?> 


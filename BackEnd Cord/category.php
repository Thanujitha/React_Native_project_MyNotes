<?php

require "connection.php";
$search_category = Database::search("SELECT * FROM `category`");
$category_list = array(); 

while ($category = $search_category->fetch_assoc()) {
    $cat = new stdClass();
    $cat->id = $category["id"];
    $cat->name = $category["name"];
    
    $category_list[] = $cat; 
}

echo json_encode($category_list); 
?>
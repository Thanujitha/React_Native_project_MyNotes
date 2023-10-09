<?php

require "connection.php";
$user_id = $_GET['userId'];

// $search_note = Database::search("SELECT * FROM `note` WHERE `user_id` ='".$user_id."'");
$search_note = Database::search("SELECT * FROM `note` INNER JOIN `category` ON `note`.`category_id` = `category`.`id`  WHERE `user_id` ='".$user_id."'");
// $search_note = Database::search("SELECT note.id,note.title,note.description,note.category_id,note.user_id,note.date,category.img_path FROM `note` INNER JOIN `category` ON `note`.`category_id` = `category`.`id`  WHERE `user_id` ='1'");
$note_list = array(); 

while ($note = $search_note->fetch_assoc()) {

    // $not = new stdClass();
    // $not->id = $note["note.id"];
    // $not->title = $note["note.title"];
    // $not->description = $note["note.description"];
    // $not->category_id = $note["note.category_id"];
    // $not->user_id = $note["note.user_id"];
    // $not->date = $note["note.date"];
    // $not->imgpath = $note["category.img_path"];
    $not = new stdClass();
    $not->id = $note["id"];
    $not->title = $note["title"];
    $not->description = $note["description"];
    $not->category_id = $note["category_id"];
    $not->user_id = $note["user_id"];
    $not->date = $note["date_time"];
    $not->imgpath = $note["url"];

    $note_list[] = $not; 
}

echo json_encode($note_list); 
?>
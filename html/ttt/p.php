<?php
    $grid = file_get_contents('php://input');
    $grid['8'] = "O";
    $myjson -> grid = $grid;
    $myjson -> winner = "me";
    echo json_encode($myjson); 
?>
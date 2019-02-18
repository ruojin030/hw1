<?php
    $json= file_get_contents('php://input');
    //echo $json;
    //echo $grid;  
    $grid['0'] = "O";
    $grid['1'] = " ";
    $grid['2'] = " ";
    $grid['3'] = "X";
    $grid['4'] = "O";
    $grid['5'] = " ";
    $grid['6'] = "X";
    $grid['7'] = " ";
    $grid['8'] = "O";
    $myjson -> grid = $grid;
    $myjson -> winner = "me";
    echo json_encode($myjson); 
?>
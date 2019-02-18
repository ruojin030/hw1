<?php
    $json= file_get_contents('php://input');
    //echo $json;
    $grid = json_decode($json);
    echo $grid;
    //$grid['8'] = "O";
    //$myjson -> grid = $grid;
    //$myjson -> winner = "me";
    //echo json_encode($myjson); 
?>
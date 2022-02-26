<?php
if ($_POST && $_POST['image']){
    $im = str_replace(" ","+",strip_tags($_POST['image']));
    $im = substr($im, 1+strrpos($im, ','));
    if ($_POST['id']) file_put_contents("webcam/web".strip_tags($_POST['id']).".jpg", base64_decode($im));
    }
?>
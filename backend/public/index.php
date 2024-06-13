<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


require_once '../config/database.php';
require_once '../src/models/FetchUserData.php';

try {
    $database = new Database();
    
    $db = $database->getConnection();

    $userModel = new FetchUserData($db);
    $users = $userModel->fetchUsers();

    
    echo json_encode($users);
} catch (Exception $e) {
    
    echo json_encode(['message' => 'Failed to fetch examples', 'error' => $e->getMessage()]);
}

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


require_once '../config/database.php';
require_once '../src/models/CreateUser.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        
        $data = json_decode(file_get_contents("php://input"), true);

        if (!isset($data['user_name']) || empty($data['user_name'])) {
            throw new Exception("User name is required.");
        }

        $database = new Database();
        $db = $database->getConnection();

        $userModel = new CreateUser($db);

        $userModel->user_name = $data['user_name'];
        $userModel->user_email = $data['user_email'];
        $userModel->user_password = $data['user_password'];
        $userModel->age= $data['user_age'];

        if ($userModel->create()) {
            echo json_encode(array("message" => "User created successfully"));
        } else {
            echo json_encode(array("message" => "Failed to create user"));
        }
    } catch (Exception $e) {
        echo json_encode(array("message" => "Failed to create user", "error" => $e->getMessage()));
    }
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method Not Allowed"));
}

<?php
class CreateUser {
    private $conn;
    private $table_name = "users";
    public $user_name;
    public $user_email;
    public $user_password;
    public $age;

    public function __construct($db) {
        $this->conn = $db;
    }

    function create() {
        $query = "INSERT INTO " . $this->table_name . " (user_name, age, email, password) VALUES (?, ?, ?, ?)";

        $stmt = $this->conn->prepare($query);

        $hashed_password = password_hash($this->user_password, PASSWORD_DEFAULT);

        $stmt->bind_param("ssss", $this->user_name, $this->age, $this->user_email, $hashed_password);

        if ($stmt->execute()) {
            return true; 
        } else {
            return false; 
        }
    }
}
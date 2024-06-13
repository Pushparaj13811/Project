<?php
class FetchUserData {
    private $conn;

    public function __construct($db) {
        
        if (!$db) {
            throw new Exception("Database connection is null");
        }
        $this->conn = $db;
    }
    public function fetchUsers() {
        
        $query = "SELECT user_id, user_name FROM user";
        
        try {
            
            $stmt = $this->conn->prepare($query);
            
            $stmt->execute();
            
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            
            return $result;
        } catch (Exception $e) {
            throw new Exception("Error fetching User Data: " . $e->getMessage());
        }
    }
}

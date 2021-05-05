<?php

class blog
{

    private $conn;

    private $db_table = "blogs";

    public $title;
    public $description;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getAllBlogs()
    {
        $sql = 'SELECT title, description FROM ' . $this->db_table . ' ';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt;

    }

    public function createNewBlog()
    {
        $sql = "INSERT INTO
                        " . $this->db_table . "
                    SET
                        title = :title, 
                        description = :description";
        $stmt = $this->conn->prepare($sql);

        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->description=htmlspecialchars(strip_tags($this->description));

        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam('description', $this->description);

        if($stmt->execute()){
            return true;
        }
        return  false;
    }
}
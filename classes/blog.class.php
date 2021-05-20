<?php

class blog
{

    private $conn;

    private $id;
    private $db_table = "blogs";
    public $title;
    public $description;
    public $file;
    public $created;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getAllBlogs()
    {
        $sql = 'SELECT id, title, description , file, created FROM ' . $this->db_table . ' ';
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
                        description = :description,
                        file = :file,
                        created = :created";
        $stmt = $this->conn->prepare($sql);

        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->file=htmlspecialchars(strip_tags($this->file));
        $this->created=htmlspecialchars(strip_tags($this->created));

        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':file', $this->file);
        $stmt->bindParam(':created', $this->created);

        if($stmt->execute()){
            return true;
        }
        return  false;
    }
}
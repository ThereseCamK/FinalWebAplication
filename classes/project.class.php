<?php
class project{

    private $conn;

    private $db_ProTable = 'projects';
    public $id;
    public $projectName;
    public $content;
    public $link;

    public function __construct($db){
        $this->conn = $db;
    }

    public function getAllProjects(){
        $sql = 'SELECT id, projectName, content, link FROM '. $this->db_ProTable . ' ';
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        return $stmt;
    }

    public function createNewProject(){
        $projectSql = "INSERT INTO
                        " . $this->db_ProTable . "
                    SET
                        projectName = :projectName, 
                        content = :content,
                        link = :link";

        $stmt = $this->conn->prepare($projectSql);

        $this->projectName=htmlspecialchars(strip_tags($this->projectName));
        $this->content=htmlspecialchars(strip_tags($this->content));
        $this->link=htmlspecialchars(strip_tags($this->link));

        $stmt->bindParam(':projectName', $this->projectName);
        $stmt->bindParam(':content', $this->content);
        $stmt->bindParam(':link', $this->link);

        if($stmt->execute()){
            return true;
        }
        return  false;
    }
    public function getSingleProject(){
        $sqlQuery = " SELECT
        id, projectName, content, link
        FROM
        "   .$this->db_ProTable . "
        WHERE id = ?
        LIMIT 0,1" ;

        $stmt = $this->conn->prepare($sqlQuery);

        $stmt->bindParam(1, $this->id);
        $stmt->execute();
        $datarow = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->projectName = $datarow['projectName'];
        $this->content = $datarow['content'];
        $this->link = $datarow['link'];
    }
}
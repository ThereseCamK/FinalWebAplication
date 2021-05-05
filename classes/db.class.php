<?php
class db{
    private $host = 'localhost';
    private $user = 'root';
    private $pwd = '';
    private $dbName = 'phprest';

    public $conn;
    public function connect(){
        $this->conn = null;
        try{
            $dsn = 'mysql:host='.$this->host . ';dbname=' .$this->dbName;
            $this->conn =  new PDO($dsn, $this->user, $this->pwd);
            $this->conn ->exec('blog laget');
            echo "Tilkobling suksess";
        } catch (PDOException $e){
            echo "Tilkobling feilet" . $e->getMessage();
        }



        return$this->conn;
    }
}
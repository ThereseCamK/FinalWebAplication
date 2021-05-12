<?php
class db{
    private $host = 'thereseck.one.mysql';
    private $user = 'thereseck_onewebapi';
    private $pwd = 'bollekokko3096';
    private $dbName = 'thereseck_onewebapi';

    public $conn;

    public function connection(){
        $this->conn = null;
        try{
            $dsn = 'mysql:host='.$this->host . ';dbname=' .$this->dbName;
            $this->conn =  new PDO($dsn, $this->user, $this->pwd);
            $this->conn ->exec('tilkobling');

        } catch (PDOException $e){
            echo "Tilkobling feilet" . $e->getMessage();
        }

        return$this->conn;
    }
}
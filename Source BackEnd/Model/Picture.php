<?php
    include_once 'define.php';

    class Picture {
        private $conn;

        function __construct()
        {
            // Create connection
            $this->conn = new mysqli(HOST, USER, PASS, DB_NAME);
            // Check connection
            if ($this->conn->connect_error) {
                die("Connection failed: " . $this->conn->connect_error);
            }
        }

        function __destruct()
        {
            $this->conn->close();
        }

        function set($source, $new_picture)
        {
            global $DB_CONT;
            $sql = "UPDATE $DB_CONT SET Picture='$new_picture' WHERE Code='$source'";
            if($this->conn->query($sql) === TRUE)
            {
                return 0;
            }
            return $this->conn->error;
        }

        function get_avatar()
        {
            global $DB_CONT;
            $sql = "SELECT Avatar FROM $DB_CONT";
            $result = $this->conn->query($sql);
            if($result->num_rows > 0)
            {
                $arr = array();
                while($row = $result->fetch_assoc())
                {
                    $arr[] = $row;
                }
                $json_arr = json_encode($arr);
                return $json_arr;
            }
            return "NULL";
        }

        function get_with_code($code)
        {
            global $DB_CONT;
            $sql = "SELECT Picture FROM $DB_CONT WHERE Code='$code'";
            $result = $this->conn->query($sql);
            if($result->num_rows > 0)
            {
                $arr = array();
                while($row = $result->fetch_assoc())
                {
                    $arr[] = $row;
                }
                $json_arr = json_encode($arr);
                return $json_arr;
            }
            return "NULL";
        }
    }
?>
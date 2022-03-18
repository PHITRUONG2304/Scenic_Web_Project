<?php
    include_once 'define.php';

    class Interact {
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

        function set_cmt($code, $new_comment)
        {
            global $DB_CMT;
            $sql = "INSERT INTO $DB_CMT (Code, Comment) VALUES ('$code', '$new_comment')";
            if($this->conn->query($sql) === TRUE)
            {
                return 0;
            }
            return $this->conn->error;
        }

        function get_cmt($code)
        {
            global $DB_CMT;
            $sql = "SELECT Comment FROM $DB_CMT WHERE Code='$code'";
            $result = $this->conn->query($sql);
            if($result->num_rows > 0)
            {
                $arr = array();
                while($row = $result->fetch_assoc())
                {
                    $arr[] = $row;
                }
                // Chu y cho nay...
                $json_arr = json_encode($arr);
                return $json_arr;
            }
            return "NULL";
        }

        function get_like($code)
        {
            global $DB_EMT;
            $sql = "SELECT NumLike FROM $DB_EMT WHERE Code='$code'";
            $result = $this->conn->query($sql);
            if($result->num_rows > 0)
            {
                $value = $result->fetch_assoc();
                return json_encode($value);
            }
            return "NULL";
        }

        function set_like($code)
        {
            global $DB_EMT;
            $sql = "SELECT NumLike FROM $DB_EMT WHERE Code='$code'";
            $result = $this->conn->query($sql);
            if($result->num_rows > 0)
            {
                $value = $result->fetch_assoc()["NumLike"] + 1;
                $sql = "UPDATE $DB_EMT SET NumLike='$value' WHERE Code='$code'";
                if($this->conn->query($sql) === TRUE)
                {
                    return 0;
                }
                return $this->conn->error;
            }
        }

    }
?>
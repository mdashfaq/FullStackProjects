<?php  
 //insert.php  
 $connect = mysqli_connect("127.0.0.1", "root", "", "mysql");  
 $data = json_decode(file_get_contents("php://input"));  

 echo "insert entered";
 if(count(array($data)) > 0)  
 
 {  
      $first_name = mysqli_real_escape_string($connect, $data->firstname);       
      $last_name = mysqli_real_escape_string($connect, $data->lastname); 

      
      $query = "INSERT INTO employee (first_name, last_name) VALUES ('$first_name', '$last_name')";  
      if(mysqli_query($connect, $query))  
      {  
           echo "Data Inserted...";  
      }  
      else  
      {  
           echo 'Error';  
      }  

 }  
 ?>  

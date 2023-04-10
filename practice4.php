<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $size = $_POST['size'];
    echo "<h2>Multiplication Table from 1 to $size</h2>";
    echo "<table border ='1'>";
    echo "<tr><th>&nbsp;</th>";
    for($i=1; $i<=$size; $i++){
        echo "<th>$i</th>"
    }
    echo "</tr>";
    for($i=1; $i<=size; $i++){
        echo "<tr><th>$i</th>";
        for($j=1; $j<= $size; $j++){
            echo "<td>" . ($i*$j) . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

}
?>
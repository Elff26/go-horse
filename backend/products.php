<?php 
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');

    if(isset($_SERVER['REQUEST_METHOD'])) {
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                //To get 1 product 
                break;
            case 'POST':
                onGetProducts();
                break;
        }
    }
    
    function onGetProducts() {
        $total_rows = 10;
        $page_value = 0;

        if(isset($_GET['page'])) {
            $page_value = $_GET['page'] - 1;
        }

        $start = $total_rows * $page_value;

        $con = new mysqli("localhost", "root", "", "gohorse");

        $data = getProducts($con, $total_rows, $start, $_POST['searched']);
        $rows = getPages($con,  $_POST['searched']);

        echo json_encode(array("products" => $data, "rows" => $rows));

        mysqli_close($con);
    }

    function getPages($con, $searched = '') {
        $sql = "SELECT COUNT(*) FROM produto WHERE titulo like '%$searched%' OR categoria like '%$searched%';";

        return mysqli_fetch_assoc(mysqli_query($con, $sql));
    }

    function getProducts($con, $total_rows, $start, $searched = '') {
        $data = array();
        $order = '';
        
        if($_POST['order'] !== '') {
            $order = 'ORDER BY valor '.$_POST['order'];
        }

        $sql = "SELECT * FROM produto WHERE titulo like '%$searched%' OR categoria like '%$searched%' ".$order." LIMIT $total_rows OFFSET $start";

        $result = mysqli_query($con, $sql);

        while($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        return $data;
    }
?>
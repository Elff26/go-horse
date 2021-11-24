<?php 
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: GET, POST, DELETE');

    if(isset($_SERVER['REQUEST_METHOD'])) {
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                onGetProducts();
                break;
            case 'POST':
                onInsertProduct();
                break;
            case 'DELETE':
                onDeleteProduct();
                break;
        }
    }

    function onInsertProduct() {
        if(isset($_POST['productId'])) {
            $productId = $_POST['productId'];
            $price = $_POST['price'];
            $quantity = $_POST['quantity'];
            $total = $price * $quantity;

            $con = new mysqli("localhost", "root", "", "gohorse");

            $sql = "INSERT INTO cesta(codigoCliente, codigoProduto, quantidade, sessionId, valorTotal, valorUnitario) VALUES('1', '$productId', '$quantity', 'ASD', '$total', '$price')";

            $result = mysqli_query($con, $sql);

            echo json_encode(array("result" => $result));

            mysqli_close($con);
        }
    }

    function onGetProducts() {
        if(isset($_GET['id'])) {
            $id = $_GET['id'];

            $con = new mysqli("localhost", "root", "", "gohorse");

            $sql = "SELECT * FROM cesta WHERE codigoCliente = '$id'";

            
            $result = mysqli_query($con, $sql);

            while($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }

            echo json_encode($data);

            mysqli_close($con);
        }
    }

    function onDeleteProduct() {
        if(isset($_GET["id"])) {
            $id = $_GET["id"];

            $con = new mysqli("localhost", "root", "", "gohorse");

            $sql = "DELETE FROM cesta WHERE codigoProduto = '$id'";

            $result = mysqli_query($con, $sql);

            echo json_encode($result);
        }
    }

?>
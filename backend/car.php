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
        session_start();

        if(isset($_POST['productId'])) {
            /* $sessionId = session_id(); */
            $id = $_POST["userId"];
            $productId = $_POST['productId'];
            $price = $_POST['price'];
            $quantity = $_POST['quantity'];

            $total = $price * $quantity;

            $con = new mysqli("localhost", "root", "", "gohorse");

            $sql = "INSERT INTO cesta(codigoCliente, codigoProduto, quantidade, sessionId, valorTotal, valorUnitario) VALUES('$id', '$productId', '$quantity', 'QWE', '$total', '$price')";

            $result = mysqli_query($con, $sql);

            echo json_encode(array("result" => $result));

            mysqli_close($con);
        }
    }

    function onGetProducts() {
        if(isset($_GET['id'])) {
            $id = $_GET['id'];

            $con = new mysqli("localhost", "root", "", "gohorse");

            $sql = "SELECT c.codigoCliente, c.codigoProduto, c.quantidade, c.valorUnitario, c.valorTotal, p.titulo, p.descritivo FROM cesta AS c INNER JOIN produto AS p WHERE c.codigoCliente = '$id' AND c.codigoProduto = p.codigo";

            $result = mysqli_query($con, $sql);

            $data = [];

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
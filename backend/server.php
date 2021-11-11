<?php 
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');

    if(isset($_POST['products'])) {
        getProducts();
    }

    function getProducts() {
        $total_registros = 10;
        $valor_pagina = 0;

        if(isset($_GET['pagina'])) {
            $valor_pagina = $_GET['pagina'] - 1;
        }

        $inicio = $total_registros * $valor_pagina;

        $con = new mysqli("localhost", "root", "", "gohorse");

        if($_POST['searched'] != '') {
            $data = onSearch($con, $total_registros, $inicio, $_POST['searched']);
            $rows = getPages($con, $_POST['searched']);
        } else {
            $data = allProducts($con, $total_registros, $inicio);
            $rows = getPages($con, '');
        }

        echo json_encode(array("products"=>$data, "rows"=>$rows));

        mysqli_close($con);
    }

    function getPages($con, $searched) {
        if($searched != '') {
            $sql = "SELECT COUNT(*) FROM produto WHERE titulo like '%$searched%' OR categoria like '%$searched%';";
        } else {
            $sql = "SELECT COUNT(*) FROM produto;";
        }

        return mysqli_fetch_assoc(mysqli_query($con, $sql));
    }

    function onSearch($con, $total_registros, $inicio, $searched) {
        $order = '';

        if(isset($_POST['order'])) {
            $order = 'ORDER BY valor '.$_POST['order'];
        }
        
        $sql = "SELECT * FROM produto WHERE titulo like '%$searched%' OR categoria like '%$searched%' ".$order." LIMIT $total_registros OFFSET $inicio";

        $result = mysqli_query($con, $sql);

        $data = array();

        while($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        return $data;
    }

    function allProducts($con, $total_registros, $inicio) {
        $sql = "SELECT * FROM produto LIMIT $total_registros OFFSET $inicio;";

        $data = array();

        $result = mysqli_query($con, $sql);

        while($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        return $data;
    }
?>
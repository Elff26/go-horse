<?php
  header("Access-Control-Allow-Origin: *");
  header('Content-Type: application/json');

  if(isset($_SERVER['REQUEST_METHOD'])) {
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            //To get 1 product
            break;
        case 'POST':
            onInsertUser();
            break;
    }
}

  function onInsertUser(){
    $con = new mysqli("localhost", "root", "", "gohorse");

    if(isset($_POST['name'])) {
      $name = $_POST['name'];
      $surname = $_POST['surname'];
      $email = $_POST['email'];
      $password = $_POST['password'];
      $phone = $_POST['phone'];
      $cpf = $_POST['cpf'];
    }

    $userExists = userExists($con, $email);

    if($userExists["COUNT(1)"]==0){
      insertUser($con,$name,$surname,$email,$password,$cpf,$phone);
      echo json_encode(array("Description"=>"Usuário foi inserido com sucesso, validação", "Title" => "Sucesso"));
    }else{
      echo json_encode(array("Description"=>"Não foi possivel realizar o cadastro. O email inserido já está em uso.", "Title" => "Falha"));
    }

    mysqli_close($con);
  }

  function insertUser($con,$name,$surname,$email,$password,$cpf,$phone){
    $sql = "INSERT INTO cliente (nome,sobrenome,email,senha,cpf,telefone) VALUES ('$name','$surname','$email',md5('$password'),'$cpf','$phone')";

    mysqli_query($con, $sql);
  }

  function userExists($con, $email){
    $sql = "SELECT COUNT(1) FROM gohorse.cliente WHERE email LIKE '%$email%'";

    return mysqli_fetch_assoc(mysqli_query($con, $sql));
  }
?>

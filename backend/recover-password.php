<?php
  header("Access-Control-Allow-Origin: *");
  header('Content-Type: application/json');

  if(isset($_SERVER['REQUEST_METHOD'])) {
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            //To get 1 product
            break;
        case 'POST':
          onUpdatePassword();
          break;
    }
  }

  function onUpdatePassword() {
    $con = new mysqli("localhost", "root", "", "gohorse");

    if(isset($_POST['email'])) {
      $email = $_POST['email'];
      $password= $_POST['password'];
    }

    $userExists = userExists($con, $email);

    if($userExists["COUNT(1)"]==1){
      updatePassword($con,$email,$password);
      $updateQuantityUpdate = updateQuantityUpdate($con,$email);
      echo json_encode(array("Description"=>"Sua senha foi alterada com sucesso!!", "Title" => "Sucesso", "updateQuantityUpdate" => "$updateQuantityUpdate"));
    }else{
      echo json_encode(array("Description"=>"Usuário não encontrado.", "Title" => "Falha"));
    }

    mysqli_close($con);
  }

  function userExists($con, $email){
    $sql = "SELECT COUNT(1) FROM gohorse.cliente WHERE email LIKE '%$email%'";

    return mysqli_fetch_assoc(mysqli_query($con, $sql));
  }

  function updatePassword($con,$email,$password){
    $sql = "UPDATE cliente SET senha = md5('$password') WHERE email LIKE '%$email%'";

    mysqli_query($con, $sql);
  }

  function updateQuantityUpdate($con,$email){
    $sql = "UPDATE gohorse.cliente SET quant_updates = COALESCE(quant_updates + 1, 1) WHERE email LIKE '%$email%'";

    mysqli_query($con, $sql);
  }
?>


<?php
  header("Access-Control-Allow-Origin: *");
  header('Content-Type: application/json');

  if(isset($_SERVER['REQUEST_METHOD'])) {
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            //To get 1 product
            break;
        case 'POST':
          onSendEmail();
          break;
    }
  }

  function onSendEmail(){
    $con = new mysqli("localhost", "root", "", "gohorse");

    if(isset($_POST['email'])) {
      $email = $_POST['email'];
    }

    $userExists = userExists($con, $email);

    if($userExists["COUNT(1)"]==1){
      sendEmail($email);
      echo json_encode(array("Description"=>"Um email para recuperação de senha foi encaminhado para você, verifique sua caixa de entrada ou span!", "Title" => "Sucesso"));
    }else{
      echo json_encode(array("Description"=>"Usuário não encontrado", "Title" => "Falha"));
    }

    mysqli_close($con);
  }

  function userExists($con, $email){
    $sql = "SELECT COUNT(1) FROM gohorse.cliente WHERE email LIKE '%$email%'";

    return mysqli_fetch_assoc(mysqli_query($con, $sql));
  }

  function sendEmail($email){
    $email = $_POST["email"];
    $assunto = "Go-Horse: Recuperação de senha";
    $mensagemParte1 = '<h2><span style="color:#833ab4"><strong>Go-Horse: Recuperação de senha</strong></span></h2>
      <p>Você solicitou uma nova senha para sua conta.</p>
      <table align="left" border="1" cellpadding="1" cellspacing="1" style="width:500px">
        <thead>
          <tr>
            <th scope="col"><span style="color:#833ab4">Email</span></th>
          </tr>
        </thead>
        <tbody>';

    $mensagemPart2 = "<tr><td>$email</td></tr>";

    $mensagemPart3 ='</tbody>
      </table>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>Clique <a href="http://localhost:4200/recover-password">aqui</a> para atualizar sua senha e recuperar o seu acesso a plataforma Go-Horse.</p>
      <p>&nbsp;</p>
      <p><span style="color:#833ab4"><strong>Atenciosamente,</strong></span></p>
      <p><span style="color:#833ab4"><strong>Equipe de Suporte Go-Horse</strong></span></p>
      <p>&nbsp;</p>
      <p><strong><span style="font-size:10px"><em>Esse e-mail é gerado de forma automatica e não precisa ser respondido.</em></span></strong></p>';

    $mensagem = "$mensagemParte1 $mensagemPart2 $mensagemPart3";
    $emailConcat = "to:$email";

    $header = "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: text/html; charset=UTF-8\r\n";
    $header .= "from: Fatec Teste<fatecpwAds2016@outlook.com>";

    $success = mail($emailConcat, $assunto, $mensagem, $header);
    if($success){
      echo json_encode(array("Description"=>"Email enviado com sucesso!", "Title" => "Sucesso"));
    }else {
      echo json_encode(array("Description"=>"Não foi possivel encaminhar o email de recuperação de senha.", "Title" => "Falha"));
    }
  }
?>

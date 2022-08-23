<?php

include_once("sendmail/class.phpmailer.php");
//$contactInfo = $_REQUEST['jform'];




$mail = new PHPMailer;
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'myfamilydoctor.co.in';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '';                 // SMTP username
$mail->Password = ''; 
//$mail->Port = 465; 

// TCP port to connect to


$mail->From = '';
$mail->FromName = 'Family Doctor Contact';
$mail->addAddress('', '');     // Add a recipient


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Body = "<html>

<style>
  table {
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
  tr:nth-child(odd) {
    background-color: #fff;
  }            
</style>
				<body>
					<table>
						
						<tr>
							<td><strong>Name</strong></td>
							<td><strong>" . htmlentities($_POST['name'], ENT_QUOTES) . "</strong></td>
						</tr>
						<tr>
							<td><strong>Email</strong></td>
							<td><strong>" . htmlentities($_POST['email'], ENT_QUOTES) . "</strong></td>
						</tr>
						<tr>
							<td><strong>Subject</strong></td>
							<td><strong>" . htmlentities($_POST['subject'], ENT_QUOTES) . "</strong></td>
						</tr>
						<tr>
							<td style='vertical-align:top'><strong>Message</strong></td>
							<td style='height: auto;width:100%'><strong>" . nl2br(htmlentities($_POST['message'], ENT_QUOTES)) . "</strong></td>
						</tr>
					</table>
				<body>
			</html>";

$subject = "Family Doctor :: Contact Form";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
//$headers .= 'From: Finez Technologies <no-reply@quadbike.com>' . "\r\n";
$em1 = htmlentities('contactmyfamilydoctor@gmail.com', ENT_QUOTES);


$mail->addAddress($em1, 'Contact'); // Add a recipient
$mail->Subject='Contact';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Mail sent.';
}
//@mail($to,$subject,$message,$headers);



?>
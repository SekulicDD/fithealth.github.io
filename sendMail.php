<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Load Composer's autoloader

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $subject = htmlspecialchars($_POST['subject']);
    $phone = htmlspecialchars($_POST['phone']);
    
    $mail = new PHPMailer(true); // Create a new PHPMailer instance
    try {
        // SMTP server configuration
        $mail->isSMTP();
        $mail->Host = 'mail.fithealth.co.rs';
        $mail->SMTPAuth = true;
        $mail->Username = '_mainaccount@fithealth.co.rs'; // SMTP username
        $mail->Password = 'TDMgz2jFMjEs';       // SMTP password
        $mail->SMTPSecure = 'ssl';                     // Enable SSL encryption
        $mail->Port = 465;                             // SMTP port for SSL

        // Set email parameters
        $mail->setFrom($email, $name);
        $mail->addAddress('fizioterapeutstankovic@yahoo.com'); // Recipient's email
        $mail->Subject = 'Zakazivanje termina - ' . $subject;
        $mail->Body = "Ime: $name\nTelefon: $phone\n";
        if(!empty($message)) {
            $mail->Body .= "Poruka: $message\n";
        }
        
        $mail->send();
        echo 'Message has been sent successfully!';
    } catch (Exception $e) {
        echo 'Message could not be sent. Error: ', $mail->ErrorInfo;
    }
}
?>

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
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Username = 'da5f5b2a793073'; // SMTP username
        $mail->Password = '1547506b516c63';       // SMTP password
        //$mail->SMTPSecure = 'ssl';                     // Enable SSL encryption
        $mail->Port = 2525;                             // SMTP port for SSL

        // Set email parameters
        $mail->setFrom($email, $name);
        $mail->addAddress('zaboravan99@gmail.com'); // Recipient's email
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

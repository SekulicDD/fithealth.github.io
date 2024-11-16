$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Gather form data
        let formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
        };

        // Send data via AJAX
        $.ajax({
            url: "sendmail.php",
            type: "POST",
            data: formData,
            success: function (response) {
                // Display success message
                $("#formFeedback").html("<p style='color: green;'>Poruka uspesno poslata!</p>");
            },
            error: function () {
                // Display error message
                $("#formFeedback").html("<p style='color: red;'>Doslo je do greske. Molimo pokusajte ponovo.</p>");
            },
        });
    });
});

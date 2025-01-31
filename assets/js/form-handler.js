$(document).ready(function () {
    $('#message-form').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        var website = "www.pfitz.co.zw"
        var subject = $('#subject').val();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        $('#submit-button').prop('disabled', true).val('Processing...')

        fetch(
            "https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-03a7781d-6fae-41e8-844c-4b00ebc0e645/mail/handler",
            {
                method: "POST",
                body: JSON.stringify({
                    website, name, subject, email, message
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then((response) => response.text())
            .then(
                () => {
                    alert("Message sent.")
                    $('#subject').val("");
                    $('#name').val("");
                    $('#email').val("");
                    $('#message').val("");
                    $('#submit-button').prop('disabled', false).val('Send Message')
                }
            )
            .catch(() => {
                alert("Failed to send message.")
                $('#submit-button').prop('disabled', false).val('Send Message')
            })
    });
});
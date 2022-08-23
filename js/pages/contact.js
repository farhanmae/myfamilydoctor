function GetCaptchaResponse() {

    if (validateform() == true) {
        var response = grecaptcha.getResponse();
        if (response.length == 0) {
            //reCaptcha not verified
            alert("please verify you are human!");
            evt.preventDefault();
            return false;
        }
        else {
            SendMessage();
        }
    }
}



var verifyCallback = function (response) {
    alert(response);
    if (response != '' || response != null) {
        SendMessage();
    }
};
var widgetId1;
var widgetId2;
var onloadCallback = function () {
    // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
    // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
    widgetId1 = grecaptcha.render('divcaptcha', {
        'sitekey': '6LdQNtkbAAAAAOlF2z2bOOkiVNFTZJAi_0IXOX4v',
        'theme': 'light'
    });
    //widgetId2 = grecaptcha.render(document.getElementById('example2'), {
    //    'sitekey': '6LcQcsUaAAAAAMwenPCZsct6zZ6hzuMYpP2GJ0CB'
    //});
    //grecaptcha.render('example3', {
    //    'sitekey': '6LcQcsUaAAAAAMwenPCZsct6zZ6hzuMYpP2GJ0CB',
    //  'callback' : verifyCallback,
    //  'theme' : 'light'
    //});
};



function validateform() {
    
    if ($('#txt_name').val() == "") {
        alertinfo("Please Enter password");
        $('#txt_name').focus();
        return false;
    }
    if ($('#txt_email').val() == "") {
        alertinfo("Please Enter password");
        $('#txt_email').focus();
        return false;
    }
    if ($('#txt_subject').val() == "") {
        alertinfo("Please Enter password");
        $('#txt_subject').focus();
        return false;
    }
    if ($('#txt_message').val() == "") {
        alertinfo("Please Enter password");
        $('#txt_message').focus();
        return false;
    }
    return true;
}

function SendMessage() {

    load_overlay();

    //var vardata = 'firstname=' + $("#txt_firstname").val() + '&lastname=' + $("#txt_lastname").val() + '&email=' + $("#txt_email").val() + '&subject=' + $("#txt_subject").val() + '&message=' + $("#txt_message").val();
    var vardata = { name: $("#txt_name").val(), email: $("#txt_email").val(), subject: $("#txt_subject").val(), message: $("#txt_message").val() };
    $.ajax({
        url: 'mail/mail.php',
        data: vardata,
        type: 'POST',
        success: function (ret) {
            close_overlay();
            ResetForm();
            alert("Data send successfully");

        },
        error: function (xhr, status) {
            close_overlay();
            //var msgObj = JSON.parse(xhr.responseText);
            //alerterror(msgObj, xhr);
        }
    });
}

function ResetForm() {
    $("#txt_name").val('');
    $("#txt_email").val('');
    $("#txt_subject").val('');
    $("#txt_message").val('');
    grecaptcha.reset(widgetId1);
}



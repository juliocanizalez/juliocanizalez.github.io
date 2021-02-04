function sendMail(subject, message){
    window.showSweetAlertRecaptcha = () => {
        Swal.fire({
            html: '<div id="recaptcha"></div>',
            onOpen: function () {
                grecaptcha.ready(function() {
                    grecaptcha.execute('6LckUUkaAAAAAOgumMwy0tZmBOZband95RtLc0jK', {action: 'submit'})
                    .then(function (token){
                        window.open(`mailto:juliocanizalez@outlook.com?subject=${subject}&body=${message}`, '_self');
                    });
                });
            }
        })
    }
}

function validateForm(){
    let subject = document.forms["contactForm"]["subject"].value;
    let message = document.forms["contactForm"]["message"].value;

    if(subject != "" && message != ""){
        sendMail(subject, message);
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the fields :(',
            showConfirmButton: false,
            showCloseButton: true
        })
    }
}
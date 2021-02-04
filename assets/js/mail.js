function validateForm(){
    let subject = document.forms["contactForm"]["subject"].value;
    let message = document.forms["contactForm"]["message"].value;
    console.log(subject, message)
    if(subject != "" && message != ""){
        window.open(`mailto:juliocanizalez@outlook.com?subject=${subject}&body=${message}`, '_self');
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
var facebook = document.getElementById('facebook')
var google = document.getElementById('google')

function loginFacebook(){
    facebook.classList.toggle('active')
}

function loginGoogle(){
    google.classList.toggle('active')
}

facebook.addEventListener('click', loginFacebook)
google.addEventListener('click', loginGoogle)
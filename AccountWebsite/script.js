function getinfo(event) {
    event.preventDefault();

    var username = document.getElementById('uname').value;
    var password = document.getElementById('password').value;

    /*localStorage.setItem('ls_uname', username);
    localStorage.setItem('ls_password', password);*/
    console.log(username)
    console.log(password)

    location.href = 'entrysuccess.html';
}

function getnewinfo(event) {
    event.preventDefault();

    var username = document.getElementById('uname').value;
    var password = document.getElementById('pword').value;
    var password2 = document.getElementById('pword2').value;
    var email = document.getElementById('email').value;

    console.log(username)
    console.log(password)
    console.log(password2)
    console.log(email)

    if (password == password2){
        location.href = 'entrysuccess.html';
    }
    else{
        alert("Passwords don't match")
    }
}



/*
let username = document.getElementById('uname').value;
console.log(username)
*/

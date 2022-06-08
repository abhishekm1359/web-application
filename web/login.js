function display(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var correct_pass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{7,14}/;
    console.log(user);
    console.log(pass);
    if(pass.match(correct_pass)){
        alert("login successfull")
        if(user == "abhi"){
            window.location= "first.html";
        }
        if(user == "uday"){
            window.location= "second.html";
        }
    }
    else{
        alert("wrong password")
    }
}
function validate(){
    var usnm = document.getElementById("username").value;
    var pass = document.getElementById("pwd").value;
    console.log(usnm);
    console.log(pass);
    var correctpwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}/;
    if(pass.match(correctpwd)){
        alert("Welcome "+usnm );
        window.location = "second.html";
       
    } else {
        alert("wrong");
    }
}
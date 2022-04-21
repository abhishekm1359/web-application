

function validate() {
    var usnm = document.getElementById("username").value;
    var pass = document.getElementById("pwd").value;
    // var correctpwd = /[?.*\d][?.*[a-z]][?.*[A-Z]].{6,}/;
    var correctpwd = /^[A-Za-z]\w{7,14}$/;
    // var correctpwd =  "abhi";
    if (pass.match(correctpwd)) {
        console.log("correct");
        location.replace("second.html")
        check();
    }
}

function check() {
    var usnm = document.getElementById("username").value;
    console.log(usnm);
    var mytime = new Date
    alert("hii " + usnm + "Loged in at" + mytime);
    // CreateRGB();
    // location.replace("second.html")
    pickRandomColor();
}


function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}
//Function call on button click.
function pickRandomColor() {
    var p = document.querySelector("#demo");
    document.body.style.backgroundColor = getColorCode();
}

        // function CreateRGB() {
        //     var p = document.querySelector("#demo");


        //     p.innerHTML =  +
        //     Math.floor(Math.random() * 255) +  +
        //     Math.floor(Math.random() * 255) +  +
        //     Math.floor(Math.random() * 255)  ;

        //     document.body.style.backgroundColor = p.innerHTML;


        //     document.body.style.transition = "all 0.3s ease"
        // }

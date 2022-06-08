window.onload = show();

function show(){
    var now = new Date;
    var time = now.getHours()+"h:"+now.getMinutes()+"m:"+now.getSeconds()+"s";
    var date = now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear();
    console.log(time);
    document.getElementById("time").innerHTML = "Logged in at "+time;
    document.getElementById("date").innerHTML = "Logged in at "+date;
    color = setInterval(applycolor , 1000)
    // pick_color();
}

function pick_color(){
    var n = '0123456789ABCDEF';
    var code ="#";
    for(var i = 0 ; i<6; i++){
        code = code + n[Math.floor(Math.random() * 16)];
    }
    console.log(code);
    return code;
}

function applycolor(){
    document.body.style.background = pick_color();
}

function stop(){
    clearInterval(color);
}

function logout(){
    window.location = "login.html";
}
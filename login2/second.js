window.onload = display();

function display() {
    const params = (new URL(document.location)).searchParams;
    const name = params.get("user");
    console.log(name);
    document.getElementById("second_name").innerText = name;
    var now = new Date;
    var time = now.getHours()+"h:"+now.getMinutes()+"m:"+now.getSeconds()+"s";
    document.getElementById("second_time").innerText = time;
    applycolor();
}

function colorpicker(){
    var num = '0123456789ABCDEF';
    var code = "#";
    for(var count = 0 ; count<6; count++){
        code=code+num[Math.floor(Math.random() * 16)];
    }
    return code;
}

function applycolor(){
    var b = document.getElementById("color");
    document.body.style.background = colorpicker();
}
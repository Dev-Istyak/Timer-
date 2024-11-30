var countdownDate= new Date(" Jan 17, 2025 09:00:00").getTime();
var x=setInterval(function(){
    var now =new Date().getTime();
    var distance= countdownDate - now;

    var Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var Sec = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("Days").innerHTML=Days;
document.getElementById("Hours").innerHTML=Hours;
document.getElementById("Min").innerHTML=Min;
document.getElementById("Sec").innerHTML=Sec;
},1000);



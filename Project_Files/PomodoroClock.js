// JavaScript File
$(document).ready(function(){
    var Duration = parseInt($("#Duration").text());
    var Break = parseInt($("#Break").text());
    
    $("#timeU1").on('click', function(){
        Duration += 1;
        $("#Duration").text(Duration);
    })
    $("#timeD1").on('click', function(){
        Duration -= 1;
        $("#Duration").text(Duration);
    })
    $("#breakU1").on('click', function(){
        Break += 1;
        $("#Break").text(Break);
    })
    $("#breakD1").on('click', function(){
        Break -= 1;
        $("#Break").text(Break);
    })
    
    
function startTimer(duration, display) {
    
    var timer = duration, minutes, seconds;
    
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


$("#start").on('click', function () {
    var clock = Duration * 60;
        display = document.querySelector('#clock');
    startTimer(clock, display);
});

})
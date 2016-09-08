// JavaScript File
$(document).ready(function(){

window.onload = function () {
    var display = document.querySelector('#clock'),
        timer = new CountDownTimer(5),
        timeObj = CountDownTimer.parse(5);

    format(timeObj.minutes, timeObj.seconds);
    
    timer.onTick(format);
    
    $('#start').on('click', function () {
        timer.start();
    });
    
    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }
};
    
})
// JavaScript File
$(document).ready(function(){
   
 
    
    var workingLength = parseInt($("#Duration").text());
    var breakLength = parseInt($("#Break").text());
    var inSession = true;
    var timeRemaining = workingLength * 60;
    var isPaused = false;
   
     function getFormatedTime(){
      var m = Math.floor(timeRemaining / 60);
      var s = (timeRemaining - m * 60);
      
      return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    };

        
     function updateTime(){
       $('#clock').text(getFormatedTime());   
     }   

     var timer = null;
   
    function pausePomodoro() {
        isPaused = true;
        clearInterval(timer);
    }
    
    function nextStep() {
      if (inSession === true) {
        timeRemaining = breakLength * 60;
        $("#clock").removeClass('clockON');
        $("#clock").addClass('clockOFF');
        inSession = false;
      } else {
        inSession = true;
        $("#clock").removeClass('clockOFF');
        $("#clock").addClass('clockON');
        timeRemaining = workingLength * 60;
    } startPomodoro();
    }
    
    function startPomodoro() {
      timer = setInterval(function () {
        if (timeRemaining < 1) {
            pausePomodoro();
            nextStep();
        } else
          timeRemaining--;
          updateTime();
      }, 1000);
    }
    
   
    
    
    
    // Button Controls
    $("#reset").on('click', function(){
    timeRemaining = workingLength * 60;
      updateTime();    
      inSession = !inSession;
        $("#clock").removeClass('clockOFF');
        $("#clock").addClass('clockON');
      if (!isPaused){
        $("#pause").addClass('hidden');
        $("#engage").removeClass('hidden');  
        pausePomodoro();
      }
    });
    $("#engage").on('click', function(){
        $("#engage").addClass('hidden');
        $("#pause").removeClass('hidden');
        startPomodoro();
    });
       $("#pause").on('click', function(){
         $("#pause").addClass('hidden');
         $("#engage").removeClass('hidden');
        pausePomodoro();
    });
    
    $("#timeU1").on('click', function(){
        if (worklength < 60){
        workingLength += 1;
        $("#Duration").text(workingLength);
        timeRemaining = workingLength * 60;
        updateTime();
        } else {
            return false;
        }
    });
    $("#timeD1").on('click', function(){
        if (workingLength > 1){
        workingLength -= 1;
        $("#Duration").text(workingLength);
        timeRemaining = workingLength * 60;
        updateTime();
        } else {
            return false;
        }
    });
    $("#breakU1").on('click', function(){
        if (breakLength < 60){
        breakLength += 1;
        $("#Break").text(breakLength);
        updateTime();
        } else {
            return false;
        }
    });
    $("#breakD1").on('click', function(){
        if (breakLength > 1){
        breakLength -= 1;
        $("#Break").text(breakLength);
        updateTime();
        } else {
            return false;
        }
    });
     
    updateTime();  
            
})
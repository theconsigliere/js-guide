//TIMEOUTS
// If you want to run something after 5 seconds you use a timeout


setTimeout(callback, millisecondsToRunCallbackAfter);

setTimeout(console.log('run'), 500)

// (after 5 Seconds) 'run'

//-------------------------------------------------------------
// INTERVALS
// run something every 5 seconds use an interval


setInterval(callback, millisecondsToRunCallbackContinuosly)

setInterval('buzzer', 2000)
// 'buzzer' (every 20 seconds)



// RUN INTERVAL STRAIGHT AWAY THEN RUN AGAIN AFTER 2 SECONDS

function buzzer() {
    console.log('buzz');
  }

  // pass in function as parameter and run as funcToRun()

  function setImmediateInterval(funcToRun, ms) {
    // right away call that function
    funcToRun();
    // run a regular interval
    return setInterval(funcToRun, ms);
  }

  setImmediateInterval(buzzer, 2000);



//-------------------------------------------------------------


// CLEAR INTERVAL / TIMEOUT

const timer = setTimeout('destroy', 5000)

//stop the timer form running
clearTimeout(timer)


// RUN INTERVAL THEN AFTER 3 SECONDS CANCEL


const poopInterval = setInterval(function () {
    console.log('💩');
    console.log('Hehehe');
  }, 100);

  setTimeout(function () {
    clearInterval(poopInterval);
  }, 3000);


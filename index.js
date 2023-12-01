const countdownDisplay = document.getElementById("countdown-display");
const minuteDisplay = document.getElementById('display');
console.log(minuteDisplay)
function renderCountdown() {
  const christmas = 25;
  // Task:
  // - Get today's date (you only need the day).
  const today = new Date().getDate();

  // - Calculate remaining days.
  const remainingDays = christmas - today;

  // - Display remaining days in countdownDisplay.
  countdownDisplay.innerHTML = remainingDays;

  // set day we are counting down to
  const countDownDate = new Date('Dec 25, 2023 00:00:00').getTime();
  console.log(countDownDate);

  //update count down every 1 second
  const update = setInterval(()=>{

    //get todays date and time 
    const now = new Date().getTime();

    //difference in milliseconds 
    const difference = countDownDate - now;

    //calculate hours, minutes, seconds
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //display on page 
    display.innerHTML = hours  +  ' hours ' +  minutes +  ' minutes ' + seconds + ' seconds'

    if(difference < 0){
        clearInterval(update);
        display.innerHTML = 'HAPPY CHRISTMAS !!!'
    }
    
  }, 1000)
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

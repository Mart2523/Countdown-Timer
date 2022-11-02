const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')



const summer = '21 June 2023';

function countdown(){
    const summerDate = new Date(summer);
    const currentDate = new Date();

    const totalSeconds = (summerDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds

    console.log(summerDate-currentDate)
}

countdown();

setInterval(countdown,1000);
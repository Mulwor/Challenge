const secondHandler = document.querySelector('.second-hand');
const minsHandler = document.querySelector('.min-hand');
const hourHandler = document.querySelector('.hour-hand');

function setDate() {
  const nowTime = new Date();

  const seconds = nowTime.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHandler.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = nowTime.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minsHandler.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = nowTime.getHours();
  const hourDegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHandler.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();

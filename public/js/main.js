const launchDate = new Date('May 9 2023').getTime();

const countdown = function () {
  const presentDate = new Date().getTime();

  if (presentDate < launchDate) {
    const diffInSeconds = Math.floor((launchDate - presentDate) / 1000);

    const days = Math.floor(diffInSeconds / 86400);

    let hours, minutes, seconds;
    let timeValue;

    // Hours (the remainder seconds [diffInSeconds % 86400] is now divided by how many seconds make an hour - 3600 to get the no of hours left in that day in the countdown)
    timeValue = diffInSeconds % 86400;
    hours = Math.floor(timeValue / 3600);

    // Minutes (Going back to line 16, instead of flooring and dividing by 3600, we find the remainder when divided by 3600 to get the number of minutes left in that day in the countdown )
    timeValue = timeValue % 3600;
    minutes = Math.floor(timeValue / 60);

    // Seconds (We have the amount of minutes which was gotten by flooring the division of previous timeValue by 60. Here, we now find the remainder when we divide timeValue by 60 because the integer part when divided will give us the minutes but the remainder will be the amount of seconds left)
    seconds = timeValue % 60;

    document.querySelector('.days').textContent = zeroPadding(days);
    document.querySelector('.hours').textContent = zeroPadding(hours);
    document.querySelector('.minutes').textContent = zeroPadding(minutes);
    document.querySelector('.seconds').textContent = zeroPadding(seconds);
  } else {
    document.querySelector('.days').textContent = zeroPadding(0);
    document.querySelector('.hours').textContent = zeroPadding(0);
    document.querySelector('.minutes').textContent = zeroPadding(0);
    document.querySelector('.seconds').textContent = zeroPadding(0);
    document.querySelector('.caption').textContent = 'Congratulations!!!';
  }
};

function zeroPadding(time) {
  return time < 10 ? '0' + String(time) : time;
}

setInterval(countdown, 1000);
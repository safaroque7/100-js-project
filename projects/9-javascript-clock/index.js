setInterval(function () {
  let currentTime = new Date();
  session = "AM";

  // get hour
  hour = currentTime.getHours();

  if (hour > 12) {
    session = "PM";
  }

  if (hour > 12) {
    hour -= 12;

    if (hour <= 9) {
      hour = "0" + hour;
    }
  }

  // get minutes
  minutes = currentTime.getMinutes();
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  // get seconds
  seconds = currentTime.getSeconds();
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("session").innerHTML = session;
}, 1000);
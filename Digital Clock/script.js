function currentTime() {
  var date = new Date(); // creating object of Date class
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let midDay = "AM";
    midDay = (hours >= 12) ? "PM" : "AM"; // assigning AM/PM
    hours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12): hours); // assigning hour in 12-hour format
    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
  
  document.getElementById("digitalclock").innerText = hours + " : " + minutes + " : " + seconds + " " + midDay; /* adding time to the div */
  
  let t = setTimeout(currentTime, 1000); // setting timer
}

function updateTime(i) { // appending 0 before time elements if less than 10
  if (i < 10) {
    return "0" + i;
  }
  else {
    return i;
  }
}

currentTime();
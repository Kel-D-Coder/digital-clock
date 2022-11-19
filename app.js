function timeDisplay() {

   let time = new Date();
   let hrs = time.getHours();
   let sec = time.getSeconds();
   let min = time.getMinutes();
   let session = document.getElementById("session");
   
   document.getElementById("hours").textContent = hrs;
   document.getElementById("minutes").textContent = min;
   document.getElementById("seconds").textContent = sec;

   if(hrs >= 12) {
      session.textContent = "PM";
   }
   else {
      session.textContent = "AM";
   }

   if(hrs > 12) {
      hrs - 12
   }
}

setInterval(timeDisplay, 10);
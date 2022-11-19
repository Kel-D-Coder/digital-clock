function timeDisplay() {

   let time = new Date();
   let hrs = time.getHours() % 12 || 12;
   let sec = time.getSeconds();
   let min = time.getMinutes();
   let session = document.getElementById("session");
   
   document.getElementById("hours").textContent = hrs;
   document.getElementById("minutes").textContent = min;
   document.getElementById("seconds").textContent = sec;

   if(hrs >= 12) {
      session.textContent = "AM";
   }
   else {
      session.textContent = "PM";
   }
}

setInterval(timeDisplay, 10);
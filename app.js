function timeDisplay() {

   let time = new Date();
   let hrs = time.getHours();
   let sec = time.getSeconds();
   let min = time.getMinutes();
   let session = document.getElementById("session");
   
   document.getElementById("hours").textContent = hrs - 12;
   document.getElementById("minutes").textContent = min;
   document.getElementById("seconds").textContent = sec;

   if(hrs >= 12) {
      session.textContent = "PM";
   }
   else {
      session.textContent = "AM";
   }
}

setInterval(timeDisplay, 10);
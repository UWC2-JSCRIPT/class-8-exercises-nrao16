document.addEventListener("DOMContentLoaded", function () {

   //first exercise
   const notice = document.getElementById('maintenance-notice');
   setTimeout(function () {
      notice.style.display = 'none';
   },
      5000);

   //setInterval example
   let secondsRemaining = 5;
   let countdownInterval = setInterval(function () {
      if (secondsRemaining > 0) {
         secondsRemaining--;
         console.log(secondsRemaining);
      } else {
         clearInterval(countdownInterval);
      }
   }, 1000);

});
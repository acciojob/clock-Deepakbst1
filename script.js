//your JS code here. If required.
function updateTimer() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();

      // Add leading zeros if necessary
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      var timeString = hours + ':' + minutes + ':' + seconds;
      document.getElementById('timer').textContent = timeString;

      // Update the timer every second
      setTimeout(updateTimer, 1000);
    }

    // Start the timer initially
    updateTimer();
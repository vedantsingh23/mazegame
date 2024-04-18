var countdownElement = document.getElementById('countdown');
    var totalTime = 60;
    var timeLeft = totalTime;

    function countdown() {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        countdownElement.innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

        if (timeLeft <= 0) {
            clearInterval(timer);
            countdownElement.innerHTML = 'Time is up!';
        } else {
            timeLeft--;
        }
    }

    countdown(); 

    var timer = setInterval(countdown, 1000);
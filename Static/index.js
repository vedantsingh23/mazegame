
let timer = document.getElementById('timer');
let seconds = 0;
let timerInterval = setInterval(() => {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    timer.innerHTML = `Timer: ${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
}, 1000);

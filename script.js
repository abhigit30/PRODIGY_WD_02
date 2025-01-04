let timer;
let isRunning = false;
let elapsedTime = 0;

document.getElementById('start').onclick = function () {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedTime++;
            displayTime();
        }, 1000);
    }
};

document.getElementById('pause').onclick = function () {
    clearInterval(timer);
    isRunning = false;
};

document.getElementById('reset').onclick = function () {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    displayTime();
    document.getElementById('laps').innerHTML = '';
};

document.getElementById('lap').onclick = function () {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = formatTime(elapsedTime);
        document.getElementById('laps').appendChild(lapTime);
    }
};

function displayTime() {
    document.getElementById('timer').textContent = formatTime(elapsedTime);
}

function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

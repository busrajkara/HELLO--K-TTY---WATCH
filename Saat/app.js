function formatTime(hours, minutes, seconds) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = formatTime(now.getHours(), now.getMinutes(), now.getSeconds());
}


setInterval(updateClock, 1000);
updateClock();

let stopwatchInterval;
let elapsedTime = 0;
let isRunning = false;


function updateStopwatch() {
    const stopwatch = document.getElementById('stopwatch');
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    stopwatch.textContent = formatTime(hours, minutes, seconds);
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        stopwatchInterval = setInterval(() => {
            elapsedTime++;
            updateStopwatch();
        }, 1000);
        addHeartEffect(); 
    }
}


function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(stopwatchInterval);
        addHeartEffect(); 
    }
}


function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    updateStopwatch();
    addHeartEffect(); 
}


function addHeartEffect() {
    const heart = document.createElement('span');
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.fontSize = '1.5rem';
    heart.style.color = '#ff69b4';
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 1000);
}


document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('stop-btn').addEventListener('click', stopStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);


updateStopwatch();

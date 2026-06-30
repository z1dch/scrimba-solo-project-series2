
const homeScoreEl = document.getElementById("home-score-el")
const timeoutEl = document.getElementById("timeout-el")
const quarterEl = document.getElementById("quarter-el")
const minutesEl = document.getElementById("minutes-el")
const secondsEl = document.getElementById("seconds-el")
const playPauseBtn = document.getElementById("play-pause-btn");

let countdownInterval = null;

function updateCounter(element, change, min, max) {
    let currentCount = Number(element.textContent);
    currentCount += change;
    currentCount = Math.max(min, Math.min(max, currentCount));
    element.textContent = currentCount;
}

function resetCounter(element, change) {
    currentCount = change;
    element.textContent = currentCount;
}

function setTimer(element, change, min, max) {
    let setClock = Number(element.textContent) || 0;
    setClock += change;

    if (setClock > max) {
        setClock = min;
    } 
    else if (setClock < min) {
        setClock = max;
    }

    element.textContent = setClock.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
}

function toggleTimer() {
    
    if (countdownInterval !== null) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        playPauseBtn.textContent = "PLAY";
        return;
    }

    playPauseBtn.textContent = "PAUSE";

    countdownInterval = setInterval(function() {
        let minutes = Number(minutesEl.textContent);
        let seconds = Number(secondsEl.textContent);

        if (minutes === 0 && seconds === 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            playPauseBtn.textContent = "PLAY";
            alert("Time's up!"); 
            return;
        }

        if (seconds === 0) {
            seconds = 59;
            minutes -= 1;
        } else {
            seconds -= 1;
        }

        minutesEl.textContent = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        secondsEl.textContent = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    }, 1000); 
}



let homeScoreEl = document.getElementById("home-score-el")
let timeoutEl = document.getElementById("timeout-el")
let quarterEl = document.getElementById("quarter-el")

function updateCounter(element, change) {
    let currentCount = Number(element.textContent);
    currentCount += change;
    element.textContent = currentCount;
}

function resetCounter(element, change) {
    currentCount = change;
    element.textContent = currentCount;
}


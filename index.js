
let homeScoreEl = document.getElementById("home-score-el")
let timeoutEl = document.getElementById("timeout-el")
let quarterEl = document.getElementById("quarter-el")

let homeScore = 0;
let timeout = 0;
let quarter = 0;


function twoPoints() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function threePoints() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function onePoint() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

// will insert if else in order that the zero will not turn into negative number
function minusPoint() {
    homeScore -= 1
    homeScoreEl.textContent = homeScore
}

function resetPoints() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
}

function plusButton() {
    timeout += 1
    timeoutEl.textContent = timeout
}

function minusButton() {
    timeout -= 1
    timeoutEl.textContent = timeout
}

function plusQuarter() {
    quarter += 1
    quarterEl.textContent = quarter
}

function minusQuarter() {
    quarter -= 1
    quarterEl.textContent = quarter
}
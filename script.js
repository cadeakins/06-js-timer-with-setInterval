// Select the timer display, counter display, and increment button elements
const timerDisplay = document.querySelector('#timer');
const counterDisplay = document.querySelector('#counter');
const incrementButton = document.querySelector('#incrementButton');
const startButton = document.querySelector('#startButton');

// Initialize the timer value
let timerValue = 10; // Set to 10 seconds for this challenge
let countdownInterval = null; // Store interval so we can clear it
let counterValue = 0;
let confettiShown = false; // To show confetti only once
let gameStarted = false;

// Function to start the countdown
function startCountdown() {
    // Reset values when starting
    gameStarted = true;
    timerValue = 10;
    counterValue = 0;
    confettiShown = false;
    timerDisplay.textContent = timerValue;
    counterDisplay.textContent = counterValue;

    // Clear any previous interval
    if (countdownInterval !== null) {
        clearInterval(countdownInterval);
    }

    // Start the countdown
    countdownInterval = setInterval(function() {
        timerValue--;
        timerDisplay.textContent = timerValue;

        // Stop the countdown when the timer reaches 0
        if (timerValue <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '0';
            // Show confetti if counter is 10 or more and confetti not shown yet
            if (counterValue >= 10 && !confettiShown && gameStarted) {
                showConfetti();
                confettiShown = true;
            }
        }
    }, 1000);
}

// Function to increase the counter
function increaseCounter() {
    counterValue++;
    counterDisplay.textContent = counterValue;

    // If counter reaches 10 or more and timer is still running, show confetti
    if (counterValue >= 10 && timerValue > 0 && !confettiShown && gameStarted) {
        showConfetti();
        confettiShown = true;
    }
}

// Function to show confetti using canvas-confetti library
function showConfetti() {
    // This function uses the canvas-confetti library
    if (window.confetti) {
        window.confetti();
    } else {
        alert('🎉 Congratulations! 🎉');
    }
}

// Add an event listener to the increment button to increase the counter when clicked
incrementButton.addEventListener('click', increaseCounter);

// Add an event listener to the start button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);

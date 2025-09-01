let timerInterval;
let timerTime = 0;

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      timerTime++;
      updateTimerDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timerTime = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = String(Math.floor(timerTime / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timerTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(timerTime % 60).padStart(2, '0');
  document.getElementById('timerDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}
function updateClock() {
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  timeElement.textContent = `${hours}:${minutes}`;
}

// Update the clock every minute
setInterval(updateClock, 1000);

// Initial call to display the time as soon as the page loads
updateClock();

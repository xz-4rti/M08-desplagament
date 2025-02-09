function updateTime() {
  const currentTimeElement = document.getElementById('current-time');
  const now = new Date();

  // Format the time in HH:MM:SS format
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time on page load
window.onload = updateTime;

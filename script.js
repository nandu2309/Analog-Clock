function setClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30;  // 360 / 12 = 30 degrees per hour
    const minuteDegrees = minutes * 6 + (seconds / 60) * 6;        // 360 / 60 = 6 degrees per minute
    const secondDegrees = seconds * 6;                              // 360 / 60 = 6 degrees per second

    // Update analog clock hands
    document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;

    // Update digital time display
    const formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById('digital-time').textContent = formattedTime;
}

function formatTime(hours, minutes, seconds) {
    // Add leading zero for single digit numbers
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Update the clock every second
setInterval(setClock, 1000);

// Initialize the clock immediately
setClock();

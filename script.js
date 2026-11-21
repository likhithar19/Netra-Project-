function_updateCurrentTime(){
    const now = new date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateCurrentTime, 1000);
updateCurrenttime();

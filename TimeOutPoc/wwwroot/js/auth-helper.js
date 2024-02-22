function initializeInactivityTimer(dotnetHelper) {
    var timer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(logout, 70000); // 70,000 milliseconds = 70 seconds
    }

    function logout() {
        dotnetHelper.invokeMethodAsync("Logout");
    }
}

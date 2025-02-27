// Função de contagem regressiva
function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    var countdownInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = "Tempo Expirado!";
        }
    }, 1000);
}

window.onload = function () {
    var tenMinutes = 60 * 10,
        display = document.querySelector('#countdown');
    startCountdown(tenMinutes, display);
};

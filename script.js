document.addEventListener("DOMContentLoaded", function () {

    const cover = document.getElementById("cover");
    const main = document.getElementById("main");
    const openBtn = document.getElementById("openBtn");

    if (openBtn) {
        openBtn.addEventListener("click", function () {
            cover.classList.add("hidden");
            main.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Countdown menuju hari pernikahan
    const targetDate = new Date("2026-08-23T08:00:00+07:00");

    function updateCountdown() {
        const now = new Date();
        const distance = targetDate - now;

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (distance <= 0) {
            if (daysEl) daysEl.textContent = "0";
            if (hoursEl) hoursEl.textContent = "0";
            if (minutesEl) minutesEl.textContent = "0";
            if (secondsEl) secondsEl.textContent = "0";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance / (1000 * 60 * 60)) % 24
        );
        const minutes = Math.floor(
            (distance / (1000 * 60)) % 60
        );
        const seconds = Math.floor(
            (distance / 1000) % 60
        );

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

});

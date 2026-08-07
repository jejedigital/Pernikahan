document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".cover .button");
    const music = document.getElementById("backsound");

    if (!button) return;

    button.addEventListener("click", function (e) {
        e.preventDefault();

        // Putar backsound setelah tombol ditekan
        if (music) {
            music.volume = 0.5;
            music.play().catch(function (error) {
                console.log("Musik tidak dapat diputar:", error);
            });
        }

        // Tutup/geser bagian cover
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

        // Mulai auto-scroll setelah sampai di bagian undangan
        setTimeout(function () {
            const scrollSpeed = 2;

            const autoScroll = setInterval(function () {
                window.scrollBy(0, scrollSpeed);

                if (
                    window.innerHeight + window.scrollY >=
                    document.body.scrollHeight - 5
                ) {
                    clearInterval(autoScroll);
                }
            }, 50);
        }, 1000);
    });
});

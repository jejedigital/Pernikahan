document.addEventListener("DOMContentLoaded", function () {

  const button = document.querySelector(".cover .button");

  let scrolling = false;
  let scrollTimer = null;

  if (button) {
    button.addEventListener("click", function () {

      // Mulai backsound
      const music = document.getElementById("backsound");

      if (music) {
        music.volume = 0.5;
        music.play().catch(function () {
          console.log("Browser menolak autoplay musik.");
        });
      }

      // Scroll perlahan ke isi undangan
      if (!scrolling) {
        scrolling = true;

        setTimeout(function () {

          scrollTimer = setInterval(function () {

            window.scrollBy({
              top: 1,
              left: 0,
              behavior: "auto"
            });

            if (
              window.innerHeight + window.scrollY
              >= document.documentElement.scrollHeight - 5
            ) {
              clearInterval(scrollTimer);
              scrolling = false;
            }

          }, 35);

        }, 500);
      }

    });
  }

});

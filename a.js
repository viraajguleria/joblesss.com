// 63. A. T.js
window.code = {
  run: function(options) {
    const box = document.createElement("div");
    box.style.transition = "top 5s ease, left 5s ease, width 5s ease, height 5s ease, transform 5s ease";
    box.style.position = "absolute";
    box.style.left = (100 - options.width) / 2 + "%";
    box.style.top = 0 - options.height + "%";
    box.style.width = options.width + "%";
    box.style.height = options.height + "%";
    box.style.background = options.background;
    box.style.color = options.color;

    // Correct way to set innerHTML/text
    box.innerHTML = options.inside || "";

    document.body.appendChild(box);

    // Move box into view
    setTimeout(() => {
        box.style.top = (100 - options.height) / 2 + "%";
    }, 10);

    // Animate and disappear
    setTimeout(() => {
        box.style.width = "0%";
        box.style.height = "0%";
        box.style.rotate = "720deg";
        box.style.top = "50%";
        box.style.left = "50%";
        box.style.transform = "rotate(720deg)";
    }, 5000);
  }
};


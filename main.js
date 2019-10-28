var start    = null;
var duration = 1000;
var delay    = 500;
var current  = 0;
var slides   = document.querySelectorAll('.slider li');

function step(timestamp) {
  var progress;
  if (!start) {
    start = timestamp;
    slides[current].style.zIndex = 0;
    current = ++current % slides.length;
    slides[current].style.zIndex = 1;
  }


  progress = timestamp - start;
  slides[current].style.right = 100 - (progress / 10) + "%";
//   slides[current-1].style.right = 100 - 2*(progress / 10) + "%";
  if (progress > duration) {
    start = null;

    window.setTimeout(
      window.requestAnimationFrame.bind(window, step),
      delay
    );
  } else {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
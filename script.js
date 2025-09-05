// Particles.js config
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 80},
    "color": {"value": "#ff0000"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.7},
    "size": {"value": 3},
    "line_linked": {"enable": true,"distance": 150,"color": "#ff0000","opacity": 0.4,"width": 1},
    "move": {"enable": true,"speed": 2,"direction": "none","random": false,"straight": false,"out_mode": "out"}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {"onhover": {"enable": true,"mode": "repulse"},"onclick": {"enable": true,"mode": "push"}}
  },
  "retina_detect": true
});

// Button sounds
const buttons = document.querySelectorAll('button');
const clickSound = document.getElementById('click-sound');
const selectSound = document.getElementById('select-sound');

buttons.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    selectSound.currentTime = 0;
    selectSound.play();
  });
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// Open links
function openLink(url) {
  window.open(url, '_blank');
}

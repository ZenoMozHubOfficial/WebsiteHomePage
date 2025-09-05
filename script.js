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

// Disable text selection & context menu
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());

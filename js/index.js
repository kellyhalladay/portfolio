
console.log("JS loaded");

const drawer = document.getElementById('drawer');
const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('openBtn');

// Show drawer
openBtn?.addEventListener('click', () => {
  drawer.classList.remove('opacity-0', 'pointer-events-none');
  drawer.querySelector('nav').classList.remove('-translate-x-full');
});

// Hide drawer
closeBtn?.addEventListener('click', () => {
  drawer.classList.add('opacity-0', 'pointer-events-none');
  drawer.querySelector('nav').classList.add('-translate-x-full');
});

console.log(openBtn, closeBtn, drawer);

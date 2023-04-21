// Get the moon and mosque images
const moonImg = document.querySelector('.moon');
const mosqueImg = document.querySelector('.mosque');

// Add animation to the moon image
moonImg.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  duration: 15000,
  iterations: Infinity,
  easing: 'ease-in-out'
});

// Add animation to the mosque image
mosqueImg.animate([
  { transform: 'scale(1)' },
  { transform: 'scale(1.2)' },
  { transform: 'scale(1)' }
], {
  duration: 15000,
  iterations: Infinity,
  easing: 'ease-in-out'
});

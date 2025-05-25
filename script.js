// SAFE ANIMATION CONTROLLER
function createFallingElement() {
  const element = document.createElement('span');
  element.textContent = '$';
  element.style.left = `${Math.random() * 100}%`;
  element.style.animationDuration = `${Math.random() * 3 + 2}s`;
  element.style.opacity = Math.random() * 0.5 + 0.3;
  document.getElementById('moneyRain').appendChild(element);
}

function startAnimation() {
  const rain = document.getElementById('moneyRain');
  rain.innerHTML = '';
  
  // Create elements safely
  for (let i = 0; i < 30; i++) {
    createFallingElement();
  }
  
  rain.style.display = 'block';
  setTimeout(() => {
    rain.style.display = 'none';
  }, 5000);
}

// Start cycle
setTimeout(startAnimation, 1000);
setInterval(startAnimation, 65000);

// Copy button
document.getElementById('copyBtn').addEventListener('click', () => {
  navigator.clipboard.writeText('5ZM7K9oW5nJ1D7mLZRsVZVpoBeFNJZ4sZHu2MMKKNdNE');
  const btn = document.getElementById('copyBtn');
  btn.innerHTML = '<i class="fas fa-check"></i> COPIED!';
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-copy"></i> COPY';
  }, 2000);
});
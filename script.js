function createFallingElement() {
  const el = document.createElement('div');
  el.classList.add('falling');
  el.innerText = Math.random() > 0.5 ? '💵' : '🪙';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = Math.random() * 20 + 20 + 'px';
  document.getElementById('falling-container').appendChild(el);

  setTimeout(() => el.remove(), 10000); // Remove after fall
}

function startRain() {
  for (let i = 0; i < 30; i++) {
    setTimeout(createFallingElement, i * 300);
  }
}

// Start rain on page load
startRain();

// Repeat rain every 60 seconds
setInterval(startRain, 60000);

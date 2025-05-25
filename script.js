// Controlled Money Rain (5s on, 60s off)
function toggleMoneyRain() {
  const moneyRain = document.getElementById('moneyRain');
  
  // Generate new $ elements each cycle
  moneyRain.innerHTML = '';
  for (let i = 0; i < 25; i++) {
    const dollar = document.createElement('span');
    dollar.innerHTML = '$';
    dollar.style.left = Math.random() * 100 + '%';
    dollar.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 3-5s fall
    dollar.style.animationDelay = Math.random() * 2 + 's';
    moneyRain.appendChild(dollar);
  }
  
  // Show for 5 seconds
  moneyRain.style.display = 'block';
  setTimeout(() => {
    moneyRain.style.display = 'none';
  }, 5000);
}

// Start cycle
toggleMoneyRain();
setInterval(toggleMoneyRain, 65000); // 65s total (5s on + 60s off)

// Copy Token Address
document.getElementById('copyBtn').addEventListener('click', () => {
  const address = document.getElementById('tokenAddress').textContent;
  navigator.clipboard.writeText(address).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.innerHTML = '<i class="fas fa-check"></i> COPIED!';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-copy"></i> COPY';
    }, 2000);
  });
});
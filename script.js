// Dynamic Money Rain
const moneyRain = document.getElementById('moneyRain');
for (let i = 0; i < 50; i++) {
  const dollar = document.createElement('span');
  dollar.innerHTML = '$';
  dollar.style.left = Math.random() * 100 + '%';
  dollar.style.animationDuration = (Math.random() * 3 + 2) + 's';
  dollar.style.animationDelay = Math.random() * 5 + 's';
  moneyRain.appendChild(dollar);
}

// Copy Token Address
document.getElementById('copyBtn').addEventListener('click', () => {
  const address = document.getElementById('tokenAddress').textContent;
  navigator.clipboard.writeText(address).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
    }, 2000);
  });
});
function createMoneyRain() {
  for (let i = 0; i < 30; i++) {
    const money = document.createElement("div");
    money.classList.add("money");
    money.style.left = Math.random() * 100 + "vw";
    money.style.animationDuration = 2 + Math.random() * 3 + "s";
    money.innerText = Math.random() > 0.5 ? "💵" : "🪙";
    document.querySelector(".money-rain").appendChild(money);

    setTimeout(() => {
      money.remove();
    }, 6000);
  }
}

createMoneyRain(); // Initial rain
setInterval(() => {
  createMoneyRain();
}, 60000); // Rain every 60 seconds

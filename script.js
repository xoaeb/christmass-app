function createSnow() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snow");

  const size = Math.random() * 15 + 10; // Snowflake size between 10px and 25px
  const startingLeft = Math.random() * window.innerWidth;
  const duration = Math.random() * 10 + 5;
  const delay = Math.random() * 5;

  snowflake.style.fontSize = `${size}px`;
  snowflake.style.left = `${startingLeft}px`;
  snowflake.style.animationDuration = `${duration}s`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = Math.random();

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

setInterval(createSnow, 100);

for (let i = 0; i < 50; i++) {
  setTimeout(createSnow, Math.random() * 3000);
}

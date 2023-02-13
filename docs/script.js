const title = document.querySelector("#title");

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomPosition = () => {
  const x = randomNumber(0, window.innerWidth - title.offsetWidth);
  const y = randomNumber(0, window.innerHeight - title.offsetHeight);
  return { x, y };
};

const updatePosition = () => {
  const { x, y } = randomPosition();
  title.style.left = `${x}px`;
  title.style.top = `${y}px`;
};

updatePosition();
setInterval(updatePosition, 500);

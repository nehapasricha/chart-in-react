export const getRandomColor = () => {
  let str = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i <= 5; i++) {
    color += str[Math.floor(Math.random() * 16)];
  }

  return color;
};

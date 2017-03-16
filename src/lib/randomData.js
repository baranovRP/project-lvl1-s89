const getRandomInt = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  return signs[getRandomInt(0, 2)];
};

export default getRandomInt;

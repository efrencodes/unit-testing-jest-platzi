const animals = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
];

const randomAnimal = () => {
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return animal;
};

module.exports = randomAnimal;

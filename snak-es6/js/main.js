// ?_________________________ SNACK 1____________________________________

const bicycles = [
  { name: "Scott", weight: 10 },
  { name: "Cannodale", weight: 9 },
  { name: "Bianchi", weight: 8 },
  { name: "Orbea", weight: 10 },
  { name: "Santa Cruz", weight: 11 },
  { name: "specialized", weight: 9 },
];

// const numbers = [
//   { numero: 10, name: "pippo" },
//   { numero: 9, name: "pippo" },
//   { numero: 8, name: "pippo" },
//   { numero: 10, name: "pippo" },
//   { numero: 11, name: "pippo" },
//   { numero: 9, name: "pippo" },
// ];
// let numberMin = numbers[0]; // object

// for (let i = 1; i < numbers.length; i++) {
//   const currentNumber = numbers[i]; // object
//   if (currentNumber.numero < numberMin.numero) {
//     numberMin = currentNumber; // object
//   }
// }

// console.log(numberMin);

let bicycleWeightMin = bicycles[0];

for (let i = 1; i < bicycles.length; i++) {
  const currentBicycle = bicycles[i];
  if (currentBicycle.weight < bicycleWeightMin.weight) {
    bicycleWeightMin = currentBicycle;
  }
}

// console.log(bicycleWeightMin);

// ? __________________________SNACK 2_________________________________

// funzione numeri random

function randomNumbers(max, min) {
  const randomNmuber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNmuber;
}

const teamSoccer = [
  { name: "milan", pointsMade: 0, teackleOff: 0 },
  { name: "inter", pointsMade: 0, teackleOff: 0 },
  { name: "lazio", pointsMade: 0, teackleOff: 0 },
  { name: "roma", pointsMade: 0, teackleOff: 0 },
  { name: "napoli", pointsMade: 0, teackleOff: 0 },
];

for (let i = 0; i < teamSoccer.length; i++) {
  const currentTeam = teamSoccer[i];
  currentTeam.pointsMade = randomNumbers(50, 1);
  currentTeam.teackleOff = randomNumbers(50, 1);
  console.log(currentTeam);
}

const teamTackle = [];

for (let i = 0; i < teamSoccer.length; i++) {
  const currentTeam = teamSoccer[i];
  teamTackle.push({
    name: currentTeam.name,
    teackleOff: currentTeam.teackleOff,
  });
}

console.log(teamTackle);

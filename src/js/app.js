// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

const players = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
// const player = {
//   name: 'Маг',
//   health: 90,
// };

function toMeasureHealth(obj) {
  let life = '';

  if (obj.health >= 50) {
    life = 'healthy';
  } else if (obj.health < 50 && obj.health >= 15) {
    life = 'wounded';
  } else {
    life = 'critical';
  }

  return life;
}

const sortPlayers = players.sort((a, b) => b.health - a.health);
export { sortPlayers, toMeasureHealth };

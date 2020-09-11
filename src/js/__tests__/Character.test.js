import Character from '../Character';

// const testCharacters = [
//   {
//     type: 'Magician', name: 'Magus', distance: 0, stoned: false, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 1, stoned: false, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 2, stoned: false, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 3, stoned: false, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 4, stoned: false, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 5, stoned: false, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 0, stoned: true, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 1, stoned: true, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 2, stoned: true, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 3, stoned: true, attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 4, stoned: 'true', attack: 100,
//   },
//   {
//     type: 'Magician', name: 'Magus', distance: 5, stoned: true, attack: 100,
//   },
// ];

// test.each(testCharacters)(('Check attack for distance and stoned'),
//   ({
//     type, name, distance, stoned, attack,
//   }) => {
//     const character = new Character();
//     character.name = name;
//     character.type = type;
//     character.distance = distance;
//     character.stoned = stoned;
//     expect(attack).toBe(character.attack);
//   });

test('Check attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 1;

  expect(character.attack).toBe(100);
});

test('Check attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 4;

  expect(character.attack).toBe(70);
});

test('Check attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 1;
  character.stoned = true;

  expect(character.attack).toBe(100);
});

test('Check attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 0;
  character.stoned = true;

  expect(character.attack).toBe(100);
});

test('Check attack for distance and stoned', () => {
  const character = new Character();
  character.attack = 100;
  character.distance = 2;
  character.stoned = true;

  expect(character.attack).toBe(85);
});

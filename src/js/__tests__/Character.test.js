import Character from '../Character';

const testCharacters = [
  {
    type: 'Magician', name: 'Merlin', distance: -5, stoned: false, attack: 10,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 0, stoned: false, attack: 10,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 1, stoned: false, attack: 10,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 6, stoned: false, attack: 5,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 11, stoned: false, attack: 0,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 15, stoned: false, attack: 0,
  },
  {
    type: 'Magician', name: 'Merlin', distance: -5, stoned: true, attack: 10,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 0, stoned: true, attack: 10,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 1, stoned: true, attack: 10,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 2, stoned: true, attack: 4,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 2, stoned: 'true', attack: 9,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 6, stoned: true, attack: 0,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 11, stoned: true, attack: 0,
  },
  {
    type: 'Magician', name: 'Merlin', distance: 15, stoned: true, attack: 0,
  },
];

test.each(testCharacters)(('Check attack for distance and stoned'),
  ({
    type, name, distance, stoned, attack,
  }) => {
    const character = characterFabric(name, type, Character);
    character.distance = distance;
    character.stoned = stoned;
    expect(attack).toBe(character.attack);
  });

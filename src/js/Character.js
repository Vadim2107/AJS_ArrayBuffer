/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
export default class Character {
  constructor(name) {
    this.name = name;
    this.type = '';
    this.health = 100;
    this.level = 1;
    this.distance = 1;
    this.distanceMod = 1;
    this.stoned = false;
    this.stonedMod = 0;

    if (typeof (this.name) !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Введены не корректные данные!');
    }
  }

  levelUp() {
    this.level++;
    this.health = 100;
    this.attack += this.attack / 100 * 20;
    this.defence += this.defence / 100 * 20;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      alert('Нельзя повысить левел умершего!');
    }
  }

  set stoned(value) {
    if (typeof value !== 'boolean') return;
    this._stoned = value;
    this.setMod();
  }

  get stoned() {
    return this._stoned;
  }

  set distance(value) {
    // this._distance = (value > 0) ? value : 1;
    if (value > 0) {
      this._distance = value;
    } else {
      this._distance = 1;
    }
    this.setMod();
  }

  get distance() {
    return this._distance;
  }

  setMod() {
    this.distanceMod = (11 - this.distance) / 10;
    // this.stonedMod = this.stoned ? Math.log2(this.distance) * 5 : 0;
    if (this.stoned) {
      this.stonedMod = Math.log2(this.distance) * 5;
    } else {
      this.stonedMod = 0;
    }
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    const attack = this._attack * this.distanceMod - this.stonedMod;
    // return (attack > 0) ? Math.ceil(attack) : 0;
    if (attack > 0) {
      return Math.ceil(attack);
    } else {
      return 0;
    }
  }
}

export class Character {
  constructor(name) {
    this.name = name;
    this.type = '';
    this.health = 100;
    this.level = 1;
  
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
      alert('Нельзя повысить левел умершего!')
    }
  }
}

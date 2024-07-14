import { AttackStrategyType, PokemonType } from "../types/types.tsx";

export class State {
  private attackDamage: number;
  private health: number;
  private armor: number;

  constructor(attackDamage: number, health: number, armor: number) {
    this.attackDamage = attackDamage;
    this.health = health;
    this.armor = armor;
  }

  attack(target: PokemonType, attackStrategies: AttackStrategyType[]) {
    attackStrategies.forEach((attackStrategy) => {
      const damage: number = attackStrategy.attack();
      console.log(
        `Сработала атака ${attackStrategy.getType()} по ${
          target.name
        } с уроном ${damage}!`
      );
      target.takeDamage(damage);
    });
  }

  takeDamage(damage: number) {
    const reductionFactor = 1 - this.armor / (100 + this.armor); // Преобразование брони в коэффициент сокращения
    let actualDamage = Math.floor(damage * reductionFactor); // Уменьшение урона на основе коэффициента сокращения

    if (actualDamage < 0) {
      actualDamage = 0;
    }
    this.health -= actualDamage;

    if (this.health <= 0) {
      this.health = 0;
      return new DeadState();
    } else {
      return this;
    }
  }

  getHealth() {
    return this.health;
  }

  getArmor() {
    return this.armor;
  }

  getStatus() {
    return "State";
  }
}

export class FunctioningState extends State {
  override getStatus() {
    return "FunctioningState";
  }
}

export class DeadState extends State {
  constructor() {
    super(0, 0, 0);
  }

  override attack() {
    console.log("Покемон не может бить");
  }

  override takeDamage() {
    return this;
  }

  override getStatus() {
    return "DeadState";
  }
}

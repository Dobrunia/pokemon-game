import { AttackStrategyType, PokemonType } from "../types/types.tsx";

export class State {
  public attackDamage: number;
  public health: number;
  public armor: number;

  constructor(attackDamage: number, health: number, armor: number) {
    this.attackDamage = attackDamage;
    this.health = health;
    this.armor = armor;
  }

  attack(target: PokemonType, attackStrategies: AttackStrategyType[]) {
    attackStrategies.forEach((attackStrategy) => {
      const damage: number = attackStrategy.attack();//TODO:: const?
      console.log(
        `${attackStrategy.getType()} по ${target.name} с уроном ${damage}!`
      );
      target.takeDamage(damage);
    });
  }

  takeDamage(damage: number) {
    let actualDamage = damage - this.armor;
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

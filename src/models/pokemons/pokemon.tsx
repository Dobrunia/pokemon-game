import {
  AttackStrategyType,
  PokemonType,
  StateType,
} from "../../types/types.tsx";
import { AttackStrategy } from "../attackTypes/attackStrategy.tsx";
import { FunctioningState } from "../state.tsx";

const STANDART_DATA = {
  attackDamage: 10,
  healthBar: 100,
  armor: 0,
};

const SCALE_PER_LEVEL = {
  attackDamage: 4,
  healthBar: 10,
};

export class Pokemon {
  public name: string;
  private level: number;
  protected attackDamage: number;
  private health: number;
  private armor: number;
  protected possibleAttacks: AttackStrategyType[];
  private state: StateType;

  constructor(
    name: string,
    level: number,
    attackDamage: number,
    health: number,
    armor: number
  ) {
    this.name = name;
    this.level = level;
    this.attackDamage =
      attackDamage +
      STANDART_DATA.attackDamage +
      SCALE_PER_LEVEL.attackDamage * this.level -
      SCALE_PER_LEVEL.attackDamage;
    this.health =
      health +
      STANDART_DATA.healthBar +
      SCALE_PER_LEVEL.healthBar * this.level -
      SCALE_PER_LEVEL.healthBar;
    this.armor = armor;
    this.possibleAttacks = [new AttackStrategy(this.attackDamage)];
    this.state = new FunctioningState(
      this.attackDamage,
      this.health,
      this.armor
    );
  }

  attack(target: PokemonType) {
    console.log(`${this.name} наносит удар!`);
    this.state.attack(target, this.possibleAttacks);
  }

  takeDamage(damage: number) {
    this.state = this.state.takeDamage(damage);
    console.log(this.state.getStatus());
  }

  getInfo() {
    return `Name: ${this.name}, Level: ${this.level}, Attack Damage: ${
      this.state.attackDamage
    }, Health: ${this.state.health}, Armor: ${
      this.state.armor
    }, Status: ${this.state.getStatus()}`;
  }
}

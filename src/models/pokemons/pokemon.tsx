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

//text
export class Pokemon {
  private name: string;
  private level: number;
  private attackDamage: number;
  private health: number;
  private armor: number;
  private possibleAttacks: AttackStrategyType[];
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
    this.state = new FunctioningState(
      this.attackDamage,
      this.health,
      this.armor
    );
    this.possibleAttacks = [new AttackStrategy(this.attackDamage)];
  }

  attack(target: PokemonType) {
    //console.log(`${this.name} наносит удар!`);
    this.state.attack(target, this.possibleAttacks);
  }

  takeDamage(damage: number) {
    this.state = this.state.takeDamage(damage);
    //console.log(this.state.getStatus());
  }

  setLevel(level: number) {
    this.level = level;
    this.attackDamage =
      this.attackDamage +
      STANDART_DATA.attackDamage +
      SCALE_PER_LEVEL.attackDamage * this.level -
      SCALE_PER_LEVEL.attackDamage;
    this.health =
      this.health +
      STANDART_DATA.healthBar +
      SCALE_PER_LEVEL.healthBar * this.level -
      SCALE_PER_LEVEL.healthBar;
  }

  setPossibleAttacks(attacksArray: AttackStrategyType[]) {
    this.possibleAttacks = attacksArray;
  }

  getName() {
    return this.name;
  }

  getAttackDamage() {
    return this.attackDamage;
  }

  consoleLogInfo() {
    return `Name: ${this.name}, Level: ${
      this.level
    }, Attack Damage: ${this.getAttackDamage()}, Health: ${this.state.getHealth()}, Armor: ${this.state.getArmor()}, Status: ${this.state.getStatus()}`;
  }
}

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

  setName() {
    
  }

  setPossibleAttacks(attacksArray: AttackStrategyType[]) {
    this.possibleAttacks = attacksArray;
  }

  getAttackDamage() {
    return this.attackDamage;
  }

  getInfo() {
    return `Name: ${this.name}, Level: ${
      this.level
    }, Attack Damage: ${this.getAttackDamage()}, Health: ${this.state.getHealth()}, Armor: ${this.state.getArmor()}, Status: ${this.state.getStatus()}`;
  }
}

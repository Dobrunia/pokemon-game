import { Pokemon } from "../pokemon.tsx";
import { CriticalAttack } from "../../attackTypes/attackStrategy.tsx";

export class Vaaramus extends Pokemon {
  constructor(level: number) {
    super("Vaaramus", level, 0, -20, 0);
    this.possibleAttacks.push(new CriticalAttack(this.attackDamage, 30, 200));
  }
}

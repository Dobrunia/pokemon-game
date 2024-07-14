import { Pokemon } from "../pokemon.tsx";
import { CriticalAttack } from "../../attackTypes/attackStrategy.tsx";

export class Vaaramus extends Pokemon {
  constructor(level: number) {
    super("Vaaramus", level, 0, -20, 0);
    this.setPossibleAttacks([new CriticalAttack(this.getAttackDamage(), 30, 200)]);
  }
}

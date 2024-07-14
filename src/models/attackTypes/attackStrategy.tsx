export class AttackStrategy {
  protected type: string;
  protected damage: number;

  constructor(damage: number) {
    this.type = "обычный";
    this.damage = damage;
  }

  attack() {
    return this.damage;
  }

  getType() {
    return this.type;
  }
}

export class CriticalAttack extends AttackStrategy {
  private chance: number;
  private multiplier: number;

  constructor(damage: number, chance: number, multiplier: number) {
    super(damage);
    this.type = "критический";
    this.chance = chance;
    this.multiplier = multiplier / 100;
  }

  attack() {
    if (Math.random() < this.chance / 100) {
      return this.damage * this.multiplier - this.damage;
    } else {
      return 0;
    }
  }
}

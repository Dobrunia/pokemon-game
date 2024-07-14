export class AttackStrategy {
  private type: string;
  protected damage: number;

  constructor(damage: number) {
    this.type = "обычная";
    this.damage = damage;
  }

  getDamage() {
    return this.damage;
  }

  getType() {
    return this.type;
  }

  setType(type: string) {
    this.type = type;
  }
}

export class CriticalAttack extends AttackStrategy {
  private chance: number;
  private multiplier: number;

  constructor(damage: number, chance: number, multiplier: number) {
    super(damage);
    this.chance = chance;
    this.multiplier = multiplier / 100;
  }

  override getDamage() {
    if (Math.random() < this.chance / 100) {
      this.setType("критическая");
      return this.damage * this.multiplier;
    } else {
      this.setType("обычная");
      return this.damage;
    }
  }
}

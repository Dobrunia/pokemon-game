export type PokemonType = {
  attack?(target: PokemonType): void;
  takeDamage?(damage: number): void;
  getAttackDamage?(): number;
  setPossibleAttacks?(attacksArray: AttackStrategyType[]): void;
  getInfo?(): void;
};

export type AttackStrategyType = {
  attack(): number;
  getType(): string;
};

export type StateType = {
  attack(target: PokemonType, attackStrategies: AttackStrategyType[]): void;
  takeDamage(damage: number): StateType;
  getHealth(): number;
  getArmor(): number;
  getStatus(): string;
};

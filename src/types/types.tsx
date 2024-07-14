export type PokemonType = {
  attack?(target: PokemonType): void;
  takeDamage?(damage: number): void;
  setPossibleAttacks?(attacksArray: AttackStrategyType[]): void;
  setLevel?(level: number): void;
  getAttackDamage?(): number;
  getName?(): string;
  consoleLogInfo?(): void;
};

export type AttackStrategyType = {
  getDamage(): number;
  getType(): string;
};

export type StateType = {
  attack(target: PokemonType, attackStrategies: AttackStrategyType[]): void;
  takeDamage(damage: number): StateType;
  getHealth(): number;
  getArmor(): number;
  getStatus(): string;
};

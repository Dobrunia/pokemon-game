export type PokemonType = {
  name: string;
  attack(target: PokemonType): void;
  takeDamage(damage: number): void;
  getInfo(): void;
};

export type AttackStrategyType = {
  attack(): number;
  getType(): string;
};

export type StateType = {
  attackDamage: number;
  health: number;
  armor: number;
  attack(target: PokemonType, attackStrategies: AttackStrategyType[]): void;
  takeDamage(damage: number): StateType;
  getStatus(): string;
};

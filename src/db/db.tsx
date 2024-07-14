export class PokemonDatabase {
  //Singleton (Одиночка)
  constructor() {
    if (PokemonDatabase.instance) {
      return PokemonDatabase.instance;
    }
    this.pokemons = [];
    PokemonDatabase.instance = this;
    return this;
  }

  addPokemon(pokemon) {
    this.pokemons.push(pokemon);
  }

  getPokemons() {
    return this.pokemons;
  }
}

// const db = new PokemonDatabase();

// db.addPokemon(vaaram1);
// db.addPokemon(vaaram2);
// db.addPokemon(gosha1);

// db.getPokemons().forEach((pokemon) => {
//   console.log(pokemon.name + " - " + pokemon.phrase);
// });

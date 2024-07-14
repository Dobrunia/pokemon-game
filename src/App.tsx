import "./App.css";
import { Vaaramus } from "./models/pokemons/characters/vaaramus.tsx";
import { Maximus } from "./models/pokemons/characters/maximus.tsx";

function App() {
  const vaaramus = new Vaaramus(1);
  const maximus = new Maximus(1);

  for (let i = 0; i < 5; i++) {
    vaaramus.attack(maximus);
    maximus.attack(vaaramus);
  }

  console.log(vaaramus.getInfo());
  console.log(maximus.getInfo());
  return <></>;
}

export default App;

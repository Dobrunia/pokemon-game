import "./App.css";
import { Vaaramus } from "./models/pokemons/characters/vaaramus.tsx";

function App() {
  const vaaramus1 = new Vaaramus(1);
  const vaaramus2 = new Vaaramus(1);

  for (let i = 0; i < 5; i++) {
    vaaramus1.attack(vaaramus2);
    vaaramus2.attack(vaaramus1);
  }

  console.log(vaaramus1.getInfo());
  console.log(vaaramus2.getInfo());
  return <></>;
}

export default App;

import { CharactersGrid } from "./views/characters_grid";

class Main {
  constructor() {
    new CharactersGrid();
  }

  start() {
    console.log("Selecciona tu personaje");
  }
}

var selectScreen: Main = new Main();
selectScreen.start();

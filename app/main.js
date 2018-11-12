import CharactersController from "./components/characters/characters-controller.js";
import ShipsController from "./components/ships/ships-controller.js"

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController(),
      shipsController: new ShipsController(),
    }
  }
}


window.app = new App()

console.log("The app is up and running")

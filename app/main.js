import CharactersController from "./components/characters/characters-controller.js";
import ShipsController from "./components/ships/ships-controller.js"
import PlanetsController from "./components/planets/planets-controller.js"

class App {
  constructor() {
    this.controllers = {
      charactersController: new CharactersController(),
      shipsController: new ShipsController(),
      planetsController: new PlanetsController()
    }
  }
}


window.app = new App()

console.log("The app is up and running")

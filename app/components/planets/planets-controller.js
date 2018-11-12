import PlanetsService from "./planets-service.js"

let _planetsService = new PlanetsService()

function _draw() {
  // create a template

  let actionsTemplate = ""
  let planetsTemplate = ""

  // build action buttons

  if (_planetsService.prev) {
    actionsTemplate += `<button onclick="app.controllers.shipsController.getShips('${_planetsService.prev}')">Prev</button>`
  }
  if (_planetsService.next) {
    actionsTemplate += `<button onclick="app.controllers.shipsController.getShips('${_planetsService.next}')">Next</button>`
  }


  // loop through Planets

  _planetsService.planets.forEach(planet => {
    planetsTemplate += ` <div class="planet">${planet.name}</div>`
  });


  // set data

  document.getElementById("category-title").innerText = "Planets"
  document.getElementById("category-description").innerText = "No love for poor Pluto"
  document.getElementById("category-actions").innerHTML = actionsTemplate
  document.getElementById("category-data").innerHTML = planetsTemplate



}

export default class PlanetsController {
  constructor() {
    console.log("hello from the planets controller")
  }

  showPlanets() {
    _planetsService.getPlanets(_draw)
  }

  getPlanets(url) {
    _planetsService.getPlanets(_draw, url)
  }



}
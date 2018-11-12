import ShipsService from "./ships-service.js"


//instantiate Service
let _shipsService = new ShipsService()


function _draw() {

  // create a template

  let actionsTemplate = ""
  let shipsTemplate = ""

  // build action buttons

  if (_shipsService.prev) {
    actionsTemplate += `<button onclick="app.controllers.shipsController.getShips('${_shipsService.prev}')">Prev</button>`
  }
  if (_shipsService.next) {
    actionsTemplate += `<button onclick="app.controllers.shipsController.getShips('${_shipsService.next}')">Next</button>`
  }


  // loop through ships

  _shipsService.ships.forEach(ship => {
    shipsTemplate += `<div class="ship">${ship.name}</div>`
  });


  // set data

  document.getElementById("category-title").innerText = "Space Ships"
  document.getElementById("category-description").innerText = "Space ships do cool stuff"
  document.getElementById("category-actions").innerHTML = actionsTemplate
  document.getElementById("category-data").innerHTML = shipsTemplate
}

export default class ShipsController {
  constructor() {
    console.log("Hello from the ships controller")
  }
  showShips() {
    _shipsService.getShips(_draw)
  }

  getShips(url) {
    _shipsService.getShips(_draw, url)
  }
}
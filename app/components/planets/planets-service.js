// @ts-ignore
let planetsAPI = axios.create({
  baseURL: "https://swapi.co/api/planets/"
})

let _planets = []
let nextUrl = ""
let prevUrl = ""

export default class PlanetsService {
  constructor() {
    console.log("Hello from the planets service")
  }

  get planets() {
    return _planets
  }

  get next() {
    return nextUrl
  }

  get prev() {
    return prevUrl
  }

  getPlanets(draw, URL = "") {
    planetsAPI.get(URL)
      .then(res => {
        console.log("results from planets")
        _planets = res.data.results
        nextUrl = res.data.next
        prevUrl = res.data.previous
        draw()
      })
  }



}
let shipsAPI = axios.create({
  baseURL: "https://swapi.co/api/starships/"
})

let _ships = []
let nextUrl = ""
let prevUrl = ""


export default class ShipsService {
  constructor() {
    console.log("hello from ships service")
  }

  get ships() {
    return _ships
  }

  get next() {
    return nextUrl
  }

  get prev() {
    return prevUrl
  }

  getShips(draw, URL = "") {
    shipsAPI.get(URL)
      .then(res => {
        console.log(res)
        _ships = res.data.results
        nextUrl = res.data.next
        prevUrl = res.data.previous
        draw()
      })

  }

}
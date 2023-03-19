const { uniqueNamesGenerator, names, adjectives, colors } = require("unique-names-generator")
import { defineHex, Grid, rectangle } from "honeycomb-grid"

const fs = require("fs")

const Hex = defineHex()
const grid = new Grid(Hex)

const landNameConfig = {
  dictionaries: [names],
}

const mapNameConfig = {
  dictionaries: [adjectives, colors],
  separator: "-",
  length: 2,
}

const map = {
  name: "conquest",
  landTypes: ["arcane", "wood"],
  rhombusSize: 11,
  fillPercentage: 80,
  mapName: uniqueNamesGenerator(mapNameConfig),
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

const mapBuilder = () => {
  const data = {
    name: map.mapName,
    id: map.name,
    ySize: map.rhombusSize,
    xSize: map.rhombusSize + Math.round(11 / 2.4),
    count: 0,
    map: {},
  }
  // console.log(data.xSize)
  // const startX = (data.xSize - frameWidth) / 2
  // const startY = (data.ySize - map.rhombusSize) / 2

  function isEven(n) {
    return n % 2 == 0
  }

  for (let y = 0; y < data.ySize; y++) {
    for (let x = 0; x < data.xSize; x++) {
      const start = y
      const type =
        x > start ? "add" : map.landTypes[Math.floor(Math.random() * map.landTypes.length)]
      const name = uniqueNamesGenerator(landNameConfig)
      const position = `${x.toString().padStart(2, "0")}${y.toString().padStart(2, "0")}`
      const imageName = `${Math.floor(getRandomArbitrary(0, 2)).toString().padStart(4, "0")}`
      const land = {
        imageName: imageName,
        type,
        name,
        position,
        id: `${type}-${x}${y}${name}`,
      }
      data.map[position] = land
    }
  }
  return data
}

const mapT = JSON.stringify(mapBuilder())
fs.writeFileSync(`app/hex/constants/world.json`, mapT)

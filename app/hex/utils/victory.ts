export interface Hex {
  q: number
  r: number
  s?: number
}

export interface HexTile {
  type: "0" | "1" | "N"
  q: number
  r: number
  s: number
  isEnd: boolean
  isStart: boolean
  isPlayable: boolean
}

function hexDistance(hex1: Hex, hex2: Hex): number | null {
  // Compute the distance between two hexes using the cube coordinate system
  if (hex1.s && hex2.s) {
    return (Math.abs(hex1.q - hex2.q) + Math.abs(hex1.r - hex2.r) + Math.abs(hex1.s - hex2.s)) / 2
  }
  return null
}

export function isVictory(board: HexTile[]): "0" | "1" | null {
  if (!board) {
    return null
  }

  const tiles = convertTo2DArray(board)
  if (!tiles) {
    return null
  }

  // Create a hexagonal grid from the tiles array
  const grid: Hex[] = []
  for (let r = 0; r < tiles.length; r++) {
    for (let q = 0; q < tiles[r]!.length; q++) {
      const tile = tiles[r]![q]
      if (tile?.isPlayable || tile?.isEnd || tile?.isStart) {
        const hex: Hex = { q: tile.q, r: tile.r, s: -tile.q - tile.r }
        grid.push(hex)
      }
    }
  }

  // Find paths for player 0
  const player0Victory = findVictoryPath(board, tiles, grid, "0")
  if (player0Victory) {
    return "0"
  }

  // Find paths for player 1
  const player1Victory = findVictoryPath(board, tiles, grid, "1")
  if (player1Victory) {
    return "1"
  }

  return null
}

function findVictoryPath(
  board: HexTile[],
  tiles: HexTile[][],
  grid: Hex[],
  playerType: "0" | "1"
): boolean {
  const startTiles = board.filter((tile) => tile?.type === playerType && tile.isStart === true)
  const endTiles = board.filter((tile) => tile?.type === playerType && tile.isEnd === true)

  for (const startTile of startTiles) {
    const startHex = { q: startTile.q, r: startTile.r }
    for (const endTile of endTiles) {
      const endHex = { q: endTile.q, r: endTile.r }
      if (findPath(startHex, endHex, tiles, grid)) {
        return true
      }
    }
  }

  return false
}

function findPath(start: Hex, end: Hex, tiles: HexTile[][], grid: Hex[]): any {
  // Initialize the distance and visited arrays for Dijkstra's algorithm
  const dist: Record<string, number> = {}
  const visited: Record<string, boolean> = {}
  let hasEnd = false
  // Initialize the distance array with infinity for all hexes except the start
  grid.forEach((hex) => {
    const key = `${hex.q},${hex.r}`
    if (hex.q === start.q && hex.r === start.r) {
      dist[key] = 0
    } else {
      dist[key] = Infinity
    }
    visited[key] = false
  })

  // Implement Dijkstra's algorithm
  while (true) {
    // Find the unvisited hex with the minimum distance
    let minDist: number | undefined = Infinity
    let currHex: Hex | null = null

    for (const hex of grid) {
      const key = `${hex.q},${hex.r}`
      if (!visited[key] && dist[key] !== undefined && dist![key]! < (minDist ?? Infinity)) {
        minDist = dist[key]
        currHex = hex
      }
    }

    // Mark the current hex as visited and update the distances of its neighbors

    // If all hexes are visited or the end hex has been reached, break out of the loop
    if (!currHex || minDist === Infinity || (currHex.q === end.q && currHex.r === end.r)) {
      if (currHex && currHex.q === end.q && currHex.r === end.r) {
        hasEnd = true
      }
      break
    }

    visited[`${currHex.q},${currHex.r}`] = true

    const neighbors = grid.filter((hex) => {
      if (!tiles[hex.r] || !tiles![hex.r]![hex.q]) {
        return false
      }
      return (
        hexDistance(hex, currHex as Hex) === 1 &&
        tiles![hex.r]![hex.q]!.type === tiles![start.r]![start.q]!.type
      )
    })

    if (currHex !== null) {
      neighbors.forEach((neighbor) => {
        const neighborKey = `${neighbor.q},${neighbor.r}`
        if (!visited[neighborKey]) {
          const newDist =
            dist[`${currHex!.q},${currHex!.r}`]! + hexDistance(currHex as Hex, neighbor)!
          if (newDist < dist[neighborKey]!) {
            dist[neighborKey] = newDist
          }
        }
      })
    }
  }

  return hasEnd
}

export function convertTo2DArray(tiles: HexTile[]): HexTile[][] {
  // Find the range of the q and r coordinates
  let minQ = Infinity
  let maxQ = -Infinity
  let minR = Infinity
  let maxR = -Infinity
  for (const tile of tiles) {
    if (tile.q < minQ) minQ = tile.q
    if (tile.q > maxQ) maxQ = tile.q
    if (tile.r < minR) minR = tile.r
    if (tile.r > maxR) maxR = tile.r
  }

  // Create the 2D array
  const numRows = maxR - minR + 1
  const numCols = maxQ - minQ + 1
  const arr: HexTile[][] = Array.from({ length: numRows }, () => new Array(numCols).fill(null))

  // Populate the 2D array with the tiles
  for (const tile of tiles) {
    const rowIdx = tile.r - minR
    const colIdx = tile.q - minQ
    if (!arr[rowIdx]) {
      arr[rowIdx] = []
    }
    arr![rowIdx]![colIdx] = tile
  }

  return arr
}

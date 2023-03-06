import { INVALID_MOVE } from "boardgame.io/core"
import { jsonGrid, CustomHex } from "app/hex/constants/map"
import { randomIntFromInterval } from "app/hex/utils"
import { isVictory } from "app/hex/utils/victory"

const cells = jsonGrid.coordinates
  .filter((hex: CustomHex) => hex.isPlayable || hex.isStart || hex.isEnd)
  .map((hex: CustomHex) => {
    return {
      type: hex.type,
      q: hex.q,
      r: hex.r,
      s: hex.s,
      isEnd: hex.isEnd,
      isStart: hex.isStart,
      isPlayable: hex.isPlayable,
    }
  })

export const Hex = {
  setup: () => {
    return { cells }
  },
  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
  moves: {
    clickCell: (G, ctx, { q, r }) => {
      const currentCell = G.cells.findIndex((cell) => cell.q === q && cell.r === r)
      if (G.cells[currentCell].type === "N") {
        G.cells[currentCell].type = ctx.currentPlayer
      } else {
        return INVALID_MOVE
      }
    },
  },
  endIf: (G, ctx) => {
    if (isVictory(G.cells)) {
      return { winner: ctx.currentPlayer }
    }
  },
}

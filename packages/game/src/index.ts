import { Game } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";
import { jsonGrid, CustomHex } from "./constants/map";
import {
  HexTile,
  isVictory,
  calculateBestMove,
  randomIntFromInterval,
} from "@hexgame/utils";

const cells = (jsonGrid.coordinates as CustomHex[])
  .filter((hex) => hex.isPlayable || hex.isStart || hex.isEnd)
  .map((hex) => {
    return {
      type: hex.type,
      q: hex.q,
      r: hex.r,
      s: hex.s,
      isEnd: hex.isEnd,
      isStart: hex.isStart,
      isPlayable: hex.isPlayable,
    };
  });

interface GameState {
  cells: HexTile[];
}

export const Hex: Game<GameState> = {
  setup: (ctx) => {
    return { cells: [] };
  },
  turn: {
    minMoves: 1,
    maxMoves: 1,
  },
  moves: {
    clickCell: (G, ctx, { q, r }) => {
      const currentCell = G.cells.findIndex(
        (cell) => cell.q === q && cell.r === r
      );
      if (G.cells[currentCell].type === "N") {
        G.cells[currentCell].type = "1"; // ctx.currentPlayer;
      } else {
        return INVALID_MOVE;
      }
    },
  },
  endIf: (G, ctx) => {
    if (isVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
  },
  ai: {
    enumerate: (G, ctx) => {
      if (G.cells.length === 0) {
        return [];
      }
      let r: {
        move: "clickCell";
        args: [{ q: number; r: number }];
      }[] = [];
      // const bestMove = calculateBestMove(G.cells, ctx.currentPlayer)
      // console.log(bestMove)
      G.cells.forEach((cell) => {
        if (cell.type === "N") {
          r.push({ move: "clickCell", args: [cell] });
        }
      });
      return r;
    },
  },
};

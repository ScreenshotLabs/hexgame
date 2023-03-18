import { Hex, HexTile, isVictory } from "./victory";
type Player = "0" | "1";
type Move = { q: number; r: number };

const OPPONENT_MAP: Record<Player, Player> = {
  "0": "1",
  "1": "0",
};
const MAX_DEPTH = 3;

function evaluateBoard(board: HexTile[], currentPlayer: Player): number {
  const player0Score = board.reduce(
    (sum, tile) => (tile.type === "0" ? sum + 1 : sum),
    0
  );
  const player1Score = board.reduce(
    (sum, tile) => (tile.type === "1" ? sum + 1 : sum),
    0
  );
  return currentPlayer === "0"
    ? player0Score - player1Score
    : player1Score - player0Score;
}

function generateMoves(board: HexTile[], currentPlayer: Player): Move[] {
  const currentPlayerTiles = board.filter(
    (tile) => tile.type === currentPlayer
  );

  const getAdjacentTiles = (tile: HexTile): Hex[] => {
    const directions = [
      { q: 1, r: 0, s: -1 },
      { q: 1, r: -1, s: 0 },
      { q: 0, r: -1, s: 1 },
      { q: -1, r: 0, s: 1 },
      { q: -1, r: 1, s: 0 },
      { q: 0, r: 1, s: -1 },
    ];

    return directions.map((dir) => ({
      q: tile.q + dir.q,
      r: tile.r + dir.r,
      s: tile.s + dir.s,
    }));
  };

  const validMoves = new Set<string>();

  currentPlayerTiles.forEach((tile) => {
    const adjacentTiles = getAdjacentTiles(tile);
    adjacentTiles.forEach((adjacentTile) => {
      const adjacentTileKey = `${adjacentTile.q},${adjacentTile.r}`;
      const foundTile = board.find(
        (boardTile) =>
          boardTile.q === adjacentTile.q && boardTile.r === adjacentTile.r
      );

      if (foundTile && foundTile.type === "N") {
        validMoves.add(adjacentTileKey);
      }
    });
  });

  return Array.from(validMoves).map((moveStr) => {
    const [q, r] = moveStr.split(",").map((coord) => Number(coord));
    return { q, r } as Move;
  });
}

function makeMove(
  board: HexTile[],
  move: Move,
  currentPlayer: Player
): HexTile[] {
  return board.map((tile) =>
    tile.q === move.q && tile.r === move.r
      ? {
          ...tile,
          type: currentPlayer,
        }
      : tile
  );
}

export function calculateBestMove(
  board: HexTile[],
  currentPlayer: Player
): Move | null {
  function minimax(
    board: HexTile[],
    depth: number,
    alpha: number,
    beta: number,
    maximizingPlayer: boolean,
    currentPlayer: Player
  ): number {
    const winner = isVictory(board);
    if (winner) {
      return winner === currentPlayer ? 100 : -100;
    }

    if (depth === 0) {
      return evaluateBoard(board, currentPlayer);
    }

    let bestValue: number;
    const possibleMoves = generateMoves(board, currentPlayer);

    if (maximizingPlayer) {
      bestValue = -Infinity;
      for (const move of possibleMoves) {
        const newBoard = makeMove(board, move, currentPlayer);
        const value = minimax(
          newBoard,
          depth - 1,
          alpha,
          beta,
          false,
          currentPlayer
        );
        bestValue = Math.max(bestValue, value);
        alpha = Math.max(alpha, bestValue);
        if (beta <= alpha) {
          break;
        }
      }
    } else {
      bestValue = Infinity;
      const opponent = OPPONENT_MAP[currentPlayer];
      for (const move of possibleMoves) {
        const newBoard = makeMove(board, move, opponent);
        const value = minimax(
          newBoard,
          depth - 1,
          alpha,
          beta,
          true,
          currentPlayer
        );
        bestValue = Math.min(bestValue, value);
        beta = Math.min(beta, bestValue);
        if (beta <= alpha) {
          break;
        }
      }
    }

    return bestValue;
  }

  let bestMove: Move | null = null;
  let bestValue = -Infinity;
  const possibleMoves = generateMoves(board, currentPlayer);

  for (const move of possibleMoves) {
    const newBoard = makeMove(board, move, currentPlayer);
    const value = minimax(
      newBoard,
      MAX_DEPTH,
      -Infinity,
      Infinity,
      false,
      currentPlayer
    );
    if (value > bestValue) {
      bestValue = value;
      bestMove = move;
    }
  }

  return bestMove;
}

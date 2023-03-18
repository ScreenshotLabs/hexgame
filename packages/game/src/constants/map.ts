import {
  defineHex,
  Grid,
  rectangle,
  line,
  Direction,
  Traverser,
} from "honeycomb-grid";

const HEX_SIZE = {
  width: 124,
  height: 140,
};

// Base playable grid can be 9 or 11
const BASE_SIZE = 9;

export class CustomHex extends defineHex({
  dimensions: { width: HEX_SIZE.width, height: HEX_SIZE.height },
  origin: "topLeft",
}) {
  isPlayable?: boolean;
  type?: string;
  isEnd?: boolean;
  isStart?: boolean;
}

// Generate custom hex
const generatePlayerSide = (
  traverser: Traverser<CustomHex, CustomHex[]>,
  player: string,
  isStart: boolean
) => {
  grid.traverse(traverser).forEach((hex) => {
    hex.type = player;
    hex.isStart = isStart;
    hex.isEnd = !isStart;
    hex.isPlayable = false;
  });
};

// export const Hex = defineHex({ dimensions: { width: 70, height: 80 }, origin: "topLeft" })
export const grid = new Grid(
  CustomHex,
  rectangle({ width: BASE_SIZE * 1.7, height: BASE_SIZE + 2 })
);

// player A traversers
const playerAStart = line({
  start: [1, 0],
  direction: Direction.E,
  length: BASE_SIZE,
});
const playerAEnd = line({
  start: [1, BASE_SIZE + 1],
  direction: Direction.E,
  length: BASE_SIZE,
});

// player B traversers
const playerBStart = line({
  start: [0, 1],
  direction: Direction.SE,
  length: BASE_SIZE,
});
const playerBEnd = line({
  start: [BASE_SIZE + 1, 1],
  direction: Direction.SE,
  length: BASE_SIZE,
});

generatePlayerSide(playerAStart, "0", true);
generatePlayerSide(playerAEnd, "0", false);
generatePlayerSide(playerBStart, "1", true);
generatePlayerSide(playerBEnd, "1", false);

// Generate playable grid
for (let i = 1; i <= BASE_SIZE; i++) {
  const vector = line({
    start: [i, 1],
    direction: Direction.SE,
    length: BASE_SIZE,
  });
  grid.traverse(vector).forEach((hex) => {
    hex.isPlayable = true;
    hex.type = "N";
  });
}

export const jsonGrid = grid.toJSON();

import { Client } from "boardgame.io/react"
import { Hex } from "@hexgame/game"
import { Board } from "app/hex/components/Board"

const Game = Client({ game: {}, board: Board })

export default Game

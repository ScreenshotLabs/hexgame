import { Client } from "boardgame.io/react"
import { Hex } from "app/hex/game"
import { Board } from "app/hex/components/Board"

const Game = Client({ game: Hex, board: Board })

export default Game

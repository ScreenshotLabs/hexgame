import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"
import { useRef } from "react"
// import { jsonGrid, grid } from "@hexgame/game"

import { Box } from "@chakra-ui/react"
import Block from "app/hex/components/Block"

export function Board({ ctx, G, moves }) {
  const container = useRef<any>(null)
  const onClick = ({ q, r }) => moves.clickCell({ q, r })

  return null

  // return (
  //   <SimpleBar style={{ height: "100vh" }}>
  //     <Box ref={container} position="relative" height={grid.pixelHeight} width={grid.pixelWidth}>
  //       <Box position="absolute" height={grid.pixelHeight} width={grid.pixelWidth}>
  //         {jsonGrid.coordinates.map((hex: any, index) => {
  //           const cell = G.cells.find((cell) => cell.q === hex.q && cell.r === hex.r)
  //           return (
  //             <Block
  //               onClick={onClick}
  //               key={`${hex.q}-${hex.r}-${index}`}
  //               hex={hex}
  //               type={cell && cell.type ? cell.type : hex.type}
  //             />
  //           )
  //         })}
  //       </Box>
  //     </Box>
  //   </SimpleBar>
  // )
}

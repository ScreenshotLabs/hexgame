import { useState } from "react"
import { chakra } from "@chakra-ui/system"
import { Box } from "@chakra-ui/react"

const colors = {
  A: "#8152E5",
  B: "#FFBA08",
  N: "#0EAA85",
  "0": "#8152E5",
  "1": "#FFBA08",
}

const Block = ({ hex, onClick, type }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <chakra.svg
      mt={`${hex.origin.y}px`}
      ml={`${hex.origin.x}px`}
      position={"absolute"}
      top={`${hex.y}px`}
      left={`${hex.x}px`}
      data-hex={`${hex.q}-${hex.r}`}
      width="125px"
      height="140px"
      viewBox="0 0 71 80"
      fill="none"
      style={{ pointerEvents: "none" }}
      onClick={() => onClick({ q: hex.q, r: hex.r })}
    >
      <path
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{ pointerEvents: "visibleFill" }}
        cursor={hex.isPlayable ? "pointer" : "normal"}
        d="M31.3176 4.3094C33.8184 2.88034 36.8996 2.88034 39.4005 4.3094L64.5676 18.6906C67.0684 20.1197 68.609 22.7607 68.609 25.6188V54.3812C68.609 57.2393 67.0684 59.8803 64.5676 61.3094L39.4005 75.6906C36.8996 77.1197 33.8184 77.1197 31.3176 75.6906L6.15046 61.3094C3.6496 59.8803 2.10901 57.2393 2.10901 54.3812V25.6188C2.10901 22.7607 3.6496 20.1197 6.15046 18.6906L31.3176 4.3094Z"
        fill={type ? colors[type] : "#304560"}
      />
      {type}
    </chakra.svg>
  )
}

export default Block

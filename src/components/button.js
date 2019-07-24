import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"

const Button = props => {
  const { children, onClick, style } = props
  return (
    <button
      style={{
        padding: ".5rem 2.5rem",
        color: COLORS.lightWhite,
        fontWeight: 700,
        background: GRADIENT,
        borderRadius: BORDER_RADIUS,
        borderWidth: 0,
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

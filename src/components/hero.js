import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useSprings, animated as a, config } from "react-spring"
import Image from "./image"
import mockupFrame from "../images/mockup-frame.png"
import { useOnScreen } from "../hooks"
import Button from "./button"
import bg from "../images/backgrounds/middle gradient.svg"
import curvy from "../images/backgrounds/white curvy.svg"
import flipCurvy from "../images/backgrounds/white curvy flipped.svg"

const Phone = props => {
  return (
    <div
      style={{
        margin: 20,
        width: "250px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        ...props.style,
      }}
    >
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <Image image="mockup-content.png" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
      </div>
    </div>
  )
}

const AnimatedPhone = a(Phone)

const whichWay = i => {
  switch (i) {
    case 1:
      return "translate(45%, -50%) scale(0.85)"
    case 2:
      return "translate(-145%, -50%) scale(0.85)"
    case 3:
      return "translate(125%, -50%) scale(0.75)"
    case 4:
      return "translate(-225%, -50%) scale(0.75)"
    default:
      return "translate(-50%, -50%) scale(1)"
  }
}

const Header = ({ siteTitle }) => {
  const [on, toggle] = useState(false)
  const ref = useRef()
  const onScreen = useOnScreen(ref, "-350px")

  const items = [<Phone />, <Phone />, <Phone />, <Phone />, <Phone />]
  const animations = useSprings(
    items.length,
    items.map((item, i) => ({
      transform: on ? whichWay(i) : "translate(-50%, -50%) scale(1)",
      config: { ...config.stiff },
    }))
  )
  useEffect(() => {
    if (onScreen) {
      toggle(true)
    }
  }, [onScreen])
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          position: "relative",
          background: "#fff",
        }}
        ref={ref}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100vh",
            background: `#fff`,
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        >
          <img src={curvy} style={{ width: "100%", position: "absolute" }} />
          <img
            src={bg}
            style={{
              width: "100%",
              marginBottom: 0,
            }}
          />
          <img
            src={flipCurvy}
            style={{
              width: "100%",
              position: "absolute",
              bottom: "-20px",
              right: 0,
            }}
          />
        </div>

        {animations.map((animation, i) => (
          <AnimatedPhone key={i} style={animation} />
        ))}
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

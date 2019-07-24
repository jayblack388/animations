import React from "react"
import PropTypes from "prop-types"
import { animated as a, useSpring } from "react-spring"
import Button from "./button"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import bg from "../images/backgrounds/top gradient.svg"
import phoneFrame from "../images/purple_phone_outline.svg"
import hand from "../images/hand-01.svg"
import sw1 from "../images/soundwave1.svg"
import sw2 from "../images/soundwave2.svg"
import sw3 from "../images/soundwave3.svg"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "poweredBy.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        style={{ marginLeft: "-35px", marginTop: "65px", height: "65px" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Welcome = ({ siteTitle }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem 4rem 5rem",
        height: "100vh",
        width: "100vw",
        background: "#fff",
        position: "relative",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          background: `#fff`,
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        src={bg}
      />
      <div
        style={{
          width: "20%",
          height: "100%",
          marginTop: 400,
          marginRight: 100,
        }}
      >
        <h1 style={{ fontWeight: 500 }}>Create a</h1>
        <h1 style={{ fontWeight: 700 }}>HowTo</h1>
        <p>
          Lorem Ipsum for now and then we’ll have actual words to supplement
          this title.
        </p>
        <Button>Get started!</Button>
        <Image />
      </div>
      <div
        style={{
          width: "75%",
          height: "100%",
          marginTop: 400,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "80%",
          }}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <a.img
            style={{
              position: "absolute",
              height: "70%",
              bottom: "4rem",
              right: "1rem",
              transform: props.xy.interpolate(trans1),
            }}
            src={sw1}
          />
          <a.img
            style={{
              position: "absolute",
              height: "70%",
              bottom: "4rem",
              right: "1rem",
              transform: props.xy.interpolate(trans1),
            }}
            src={sw2}
          />
          <a.img
            style={{
              position: "absolute",
              height: "70%",
              bottom: "4rem",
              right: "1rem",
              transform: props.xy.interpolate(trans1),
            }}
            src={sw3}
          />
          <div>
            <a.img
              style={{
                position: "absolute",
                height: "80%",
                bottom: "-1rem",
                right: "5rem",
                transform: props.xy.interpolate(trans4)
              }}
              src={hand}
            />
            <a.img
              style={{
                position: "absolute",
                height: "87%",
                top: "-1rem",
                right: "9.7rem",
                transform: props.xy.interpolate(trans4)
              }}
              src={phoneFrame}
            />
          </div>
          {/* <img style={{ position: "absolute", height: "100%" }} src={phone} /> */}
        </div>
      </div>
    </div>
  )
}

Welcome.propTypes = {
  siteTitle: PropTypes.string,
}

Welcome.defaultProps = {
  siteTitle: ``,
}

export default Welcome

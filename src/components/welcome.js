import React from "react"
import PropTypes from "prop-types"
import Button from "./button"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { COLORS } from "../styles/constants"
import bg from "../images/backgrounds/top gradient.svg"

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

const Welcome = ({ siteTitle }) => (
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
    <div style={{ width: "20%", height: "100%", marginTop: 400 }}>
      <h1 style={{ fontWeight: 500 }}>Create a</h1>
      <h1 style={{ fontWeight: 700 }}>HowTo</h1>
      <p>
        Lorem Ipsum for now and then we’ll have actual words to supplement this
        title.
      </p>
      <Button>Get started!</Button>
      <Image />
    </div>
    <div style={{ width: "80%", height: "100%", marginTop: 400 }}>
      Parallax/Gifs go here
    </div>
  </div>
)

Welcome.propTypes = {
  siteTitle: PropTypes.string,
}

Welcome.defaultProps = {
  siteTitle: ``,
}

export default Welcome

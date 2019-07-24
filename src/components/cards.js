import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import {
  useChain,
  useSpring,
  useTransition,
  animated as a,
  config,
} from "react-spring"

import cards from "../data/cards"
import Button from "./button"
import { useOnScreen, useToggle } from "../hooks"
import bg from "../images/backgrounds/bottom gradient.svg"
import curvy from "../images/backgrounds/white curvy.svg"

const Card = props => {
  const [flipped, toggle] = useToggle()
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: config.gentle,
  })
  const style = {
    height: "100%",
    width: "100%",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0 3px 6px #00000016",
    display: "flex",
    alignItems: "flex-end",
    ...props.style,
  }
  const cardStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    willChange: "transform, opacity",
  }

  return (
    <a.div style={style} onMouseEnter={toggle} onMouseLeave={toggle}>
      <a.div
        style={{
          ...cardStyle,
          opacity: opacity.interpolate(o => 1 - o),
          zIndex: flipped ? 1 : 2,
          transform,
        }}
        className="front"
      >
        {props.item.image}
        <span
          style={{
            color: "white",
            marginBottom: 20,
            marginLeft: 20,
            fontWeight: 600,
            textOverflow: "ellipsis",
            width: 150,
            textShadow: "1px 1px #000",
            position: "absolute",
            bottom: 0,
          }}
        >
          {props.item.name}
        </span>
      </a.div>
      <a.div
        style={{
          ...cardStyle,
          opacity,
          zIndex: flipped ? 2 : 1,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }}
        className="back"
      >
        {props.item.image}
        <div
          className="overlay"
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: "-3",
            backgroundColor: "#000",
            opacity: 0.7,
          }}
        />
        <span
          style={{
            color: "white",
            marginBottom: 20,
            marginLeft: 20,
            fontWeight: 600,
            textOverflow: "ellipsis",
            width: 150,
            textShadow: "1px 1px #000",
            position: "absolute",
            bottom: 0,
          }}
        >
          {props.item.name}
        </span>
        <Button
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 165,
            height: 55,
            fontSize: 16,
            padding: "0.5rem 1.5rem",
          }}
        >
          Get Started!
        </Button>
      </a.div>
    </a.div>
  )
}

const positionCard = i => {
  switch (i) {
    case 0:
    case 3:
    case 5:
    case 8:
      return "-40%"
    case 1:
    case 4:
    case 6:
    case 9:
      return "-20%"
    default:
      return "0"
  }
}

const Cards = ({ siteTitle }) => {
  const [on, toggle] = useState(false)
  const cardsRef = useRef()
  const onScreen = useOnScreen(cardsRef, "-350px")
  const transRef = useRef()
  const transitions = useTransition(on ? cards : [], card => card.name, {
    ref: transRef,
    trail: 200,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  })
  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    query {
      image1: file(relativePath: { eq: "categories/art.jpg" }) {
        ...servicesImage
      }

      image2: file(relativePath: { eq: "categories/food.jpg" }) {
        ...servicesImage
      }

      image3: file(relativePath: { eq: "categories/fitness.jpg" }) {
        ...servicesImage
      }

      image4: file(relativePath: { eq: "categories/car.jpg" }) {
        ...servicesImage
      }

      image5: file(relativePath: { eq: "categories/home.jpg" }) {
        ...servicesImage
      }
      image6: file(relativePath: { eq: "categories/travel.jpg" }) {
        ...servicesImage
      }

      image7: file(relativePath: { eq: "categories/computers.jpg" }) {
        ...servicesImage
      }

      image8: file(relativePath: { eq: "categories/pets.jpg" }) {
        ...servicesImage
      }

      image9: file(relativePath: { eq: "categories/style.jpg" }) {
        ...servicesImage
      }

      image10: file(relativePath: { eq: "categories/hobbies.jpg" }) {
        ...servicesImage
      }
    }
  `)
  // return [
  //   <Img fluid={data.image1.childImageSharp.fluid} />,
  //   <Img fluid={data.image2.childImageSharp.fluid} />,
  //   <Img fluid={data.image3.childImageSharp.fluid} />,
  //   <Img fluid={data.image4.childImageSharp.fluid} />,
  //   <Img fluid={data.image5.childImageSharp.fluid} />,
  //   <Img fluid={data.image6.childImageSharp.fluid} />,
  //   <Img fluid={data.image7.childImageSharp.fluid} />,
  //   <Img fluid={data.image8.childImageSharp.fluid} />,
  //   <Img fluid={data.image9.childImageSharp.fluid} />,
  //   <Img fluid={data.image10.childImageSharp.fluid} />,
  // ]
  useChain([transRef])
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
        justifyContent: "center",
        flexDirection: "column",
        padding: "4rem 1rem",
        height: "100vh",
        width: "100vw",
        position: "relative",
        background: "#fff",
        marginTop: -80,
        marginBottom: 400,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          background: `#fff`,
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      >
        <img src={curvy} style={{ width: "100%", position: "absolute" }} />
        <img src={bg} style={{ width: "100%" }} />
      </div>
      <div
        style={{
          position: "absolute",
          display: "grid",
          grid: "50% / repeat(5, 1fr)",
          gridGap: "20px",
          padding: "20px",
          background: "transparent",
          height: "100%",
          width: "100%",
          top: 325,
        }}
        ref={cardsRef}
      >
        {transitions.map(({ item, key, props: animation }, i) => (
          <Card
            key={key}
            item={{
              ...item,
              image: (
                <Img
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    objectFit: "cover",
                    zIndex: "-5",
                  }}
                  fluid={data[`image${i + 1}`].childImageSharp.fluid}
                />
              ),
            }}
            style={{ marginTop: positionCard(i), ...animation }}
          />
        ))}
      </div>
      <Button style={{ position: "absolute", bottom: -425 }}>
        Get Early Access
      </Button>
    </div>
  )
}

Cards.propTypes = {
  siteTitle: PropTypes.string,
}

Cards.defaultProps = {
  siteTitle: ``,
}

export default Cards

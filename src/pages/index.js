import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import Hero from "../components/hero"
// import Content from "../components/content"
import Cards from "../components/cards"
// import CallToAction from "../components/cta"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Welcome />
    <Hero />
    {/* <Content /> */}
    <Cards />
    {/* <CallToAction /> */}
  </Layout>
)

export default IndexPage

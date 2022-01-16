import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
//import Seo from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"


const IndexPage = () => (
  <Layout>
    <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1> Hello Digital World!</h1>
        <p> Welcome to my portfolio </p>
        {/*<Link to="/page-2/"> See what I do here </Link> <br />*/}
        <Wave />
      </div>
    </div>
    {/*<StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />*/}
    <div className="Cards">
      <h2>Form Latest to Oldest</h2>
      <div className="CardGroup">
      <Card
      title="Project Title"
      description="brief but exhaustive description"
      />
      <Card
      title="Project Title"
      description="brief but exhaustive description"
      />
      <Card
      title="Project Title"
      description="brief but exhaustive description"
      />
      <Card
      title="Project Title"
      description="brief but exhaustive description"
      />
      <Card
      title="Project Title"
      description="brief but exhaustive description"
      />
      <Card
      title="Project Title"
      description="brief but exhaustive description"
      />
      </div>
    </div>
    <Section
    image={require('../images/game.gif')}
    title="React for Designers"
    text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
  </Layout>
)

export default IndexPage

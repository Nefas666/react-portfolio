import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Seo from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

const ContactPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1> Hello Digital World! </h1> <p> Welcome to my portfolio </p>
          {/* < Link to = "/page - 2 / " > See what I do here < /Link> <br / > */}
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
      <Section
        image={require("../images/game.gif")}
        title="Consistency Creativity Concept"
        text="Nam at tortor in tellus interdum sagittis. Vestibulum ullamcorper mauris at ligula. Ut tincidunt tincidunt erat. Cras varius. Aliquam eu nunc."
      />
    </div>
  </Layout>
)

export default ContactPage

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"


import JsPsych from "../images/jspsych.png"
import reactBg from "../images/react.png"
import jsBg from "../images/js.png"
import phpBg from "../images/php.jpg"
import tailwind from "../images/tailwind.png"
import Placeholder from "../images/me.gif"

const SectionCellGroup = styled.div`
  margin: -1px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  background: rgba(163, 120, 217, 0.25);

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  margin-top: -5px;
  transform: rotate(180deg);
  opacity: 0.25;
`

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1> Selene Manno </h1> <p> Creative Developer @DigiTouch</p>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2 id="projects"> Projects: </h2> <h2> From Latest to Oldest </h2>
        <div className="CardGroup">
          <Card
            title="Coming Soon"
            description="New project coming soon"
            img={Placeholder}
          />
          <Card
            title="ReactFolio"
            description="This portfolio was entirely made using React+ Gatsby and Styled Components)  "
            img={reactBg}
          />
          <Card
            title="Ishtar"
            description="Web Experience built mainly using WebGazer JsPsych (Tensorflow-based libs) and SCSS"
            url="https://www.ishtarxperience.com/"
            img={JsPsych}
          />
          <Card
            title="CycloStyle"
            description="LP built in Vanilla Javascript and SCSS for a PWA in which I'm also a contributor"
            url="https://www.cyclo.style/"
            img={jsBg}
          />
          <Card
            title="Haier PSIRT"
            description="Site built using Tailwind.css"
            url="https://psirt.haier-europe.com/index.html"
            img={tailwind}
          />
          <Card
            title="IA - QCV"
            description="Site built in PHP and SCSS"
            url="https://quellochevoglio.io.185.59.152.63.nip.io/"
            img={phpBg}
          />
        </div>
      </div>
      <Section
        image={require("../images/game.gif")}
        title="Web Dev. + UI = Creative Dev."
        text="I discovered again the passion for coding in 2020 and so I thought to attend a Web Design course. Before completing it, I gained the role of Junior Creative Developer.
        My interests are directed towards the developer side of web design and in building complete user centerd projects based on an Agile approach, starting from UI and ending with devOps."
      />
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell
            title={cell.title}
            description={cell.description}
            image={cell.image}
          />
        ))}
      </SectionCellGroup>
    </div>
    <WaveTop>
      <Wave />
    </WaveTop>
  </Layout>
)

export default IndexPage

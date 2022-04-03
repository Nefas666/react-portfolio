import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

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
        <h2 id="projects"> Projects: </h2>
        <h2> From Latest to Oldest </h2>
        <div className="CardGroup">
        <Card
            title="Next.js App"
            description="[w.i.p] Latest project, an app built with Next.js + React"
          />
          <Card
            title="ReactFolio"
            description="This portfolio was entirely made using React + Gatsby"
          />
          <Card
            title="Ishtar"
            description="Web Experience built using WebGazer and JsPsych (Tensorflow)"
            url="https://www.ishtarxperience.com/"
          />
          <Card
            title="CycloStyle"
            description="LP built in JS an SCSS for a PWA in wich I'm also a contributor"
            url="https://www.cyclo.style/"
          />
          <Card
            title="Haier PSIRT"
            description="Client' site built using Tailwind.css"
            url="https://psirt.haier-europe.com/index.html"
          />
          <Card
            title="IA - QCV"
            description="Client' site built in PHP and Sass"
            url="https://quellochevoglio.io.185.59.152.63.nip.io/"
          />
        </div>
      </div>
      <Section
        image={require("../images/game.gif")}
        title="Consistency Creativity Concept"
        text="Nam at tortor in tellus interdum sagittis. Vestibulum ullamcorper mauris at ligula. Ut tincidunt tincidunt erat. Cras varius. Aliquam eu nunc."
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

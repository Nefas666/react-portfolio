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
          <h1> Hello Digital World! </h1> <p> Welcome to my portfolio </p>
          {/* < Link to = "/page - 2 / " > See what I do here < /Link> <br / > */}
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2 id="projects"> From Latest to Oldest </h2>
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

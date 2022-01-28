import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Section from "../components/Section"
//import staticdata from "../../staticdata.json"
import Card from "../components/Card";
import styled from "styled-components"

//import Seo from "../components/seo"

const CardSpacer= styled.div`
height:230px;
`

const SecondPage = () => (
  <Layout>
<CardSpacer />
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
  </Layout>
)

export default SecondPage

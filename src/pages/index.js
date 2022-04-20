import * as React from "react"

import Layout from "../components/layout"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import Tools from "../components/Tools"
import styled from "styled-components"


import JsPsych from "../images/jspsych.png"
import reactBg from "../images/react.png"
import jsBg from "../images/js.png"
import phpBg from "../images/php.jpg"
import tailwind from "../images/tailwind.png"
import Placeholder from "../images/me.gif"



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
            description="This portfolio was entirely made using React+ Gatsby and Styled Components"
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
        title="Web Dev. + UI = Creative Dev."
        text="I started the Tech Path as Social Media Manager and Content Creator in 2013, and since then I've always had more interest towards the technical aspects of my job. In 2020 I thought to attend a Web Design course and gained the role of Junior Creative Developer, fairly before the final exams.
        The developing side of web design, is the part of my job that I like most and my strenght resides in building complete user centered projects with an Agile approach, starting from UI and ending with devOps."
      />
     <Tools />
    </div>
    <WaveTop>
      <Wave />
    </WaveTop>
  </Layout>
)

export default IndexPage

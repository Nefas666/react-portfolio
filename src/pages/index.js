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
        <p>Hello, my name is</p>
          <h1>Selene Manno.</h1><h1>I love to code and to design for the web.</h1> <h5> I'm a frontend developer also specialized in working with backend programming languages and environments. I'm currently working as Creative Developer @DigiTouch and just involved into the CS50 – Introduction to Computer Science course @ Harvard University </h5>
          <p></p>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2 id="projects"> Projects: </h2> <h2></h2>
        <div className="CardGroup">
         
          <Card
            title="Ishtar"
            description="Creative Coding – Web Experience built mainly using WebGazer JsPsych (Tensorflow-based library)"
            url="https://www.ishtarexperience.com/"
            img={JsPsych}
          />
          <Card
            title="CycloStyle"
            description="Collaborative Project – PWA developed with Handlebars, Vanilla Js and Bootstrap"
            url="https://www.cyclo.style/"
            img={jsBg}
          />
            <Card
              title="Yolo"
              description="Internship Project – Insurance institutional website built in PHP and Bootstrap"
              url="https://yolo-insurance.com/site/"
              img={phpBg}
            />
          {/* <Card
            title="Haier PSIRT"
            description="Site built using Tailwind.css"
            url="https://psirt.haier-europe.com/index.html"
            img={tailwind}
          /> */}
          {/* <Card
            title="Adecco"
            description="Branch site of Adecco.it, developed & designed"
            url="https://www.adecco.it/logistica"
            img={Placeholder}
          /> */}
        </div>
      </div>
      <Section
        title="Front-end Developer"
        text=""
      />
     <Tools />
    </div>
    <WaveTop>
      <Wave />
    </WaveTop>
  </Layout>
)

export default IndexPage

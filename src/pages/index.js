import * as React from "react"

import Layout from "../components/layout"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import Tools from "../components/Tools"
import styled from "styled-components"


import JsPsych from "../images/jspsych.png"
//import reactBg from "../images/react.png"
import jsBg from "../images/js.png"
import phpBg from "../images/php.jpg"
//import tailwind from "../images/tailwind.png"
//import Placeholder from "../images/me.gif"



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
          <h1>Selene Manno.</h1><h3>I enjoy coding things that live on the web.</h3> <h6> I'm a frontend developer also specialized in working with backend programming languages and environments. I'm currently working as Creative Developer @DigiTouch and just enrolled into the CS50 – Introduction to Computer Science course @ Harvard University.</h6>
          <p></p>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2 id="projects"> Some Things I’ve Built </h2> <h2></h2>
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
         
        </div>
      </div>
      <Section
        title="Learn. Code. Sleep. Repeat."
        text="When I was a child, my mother was working in a company as COBOL Programmer; By so, I had the opportunity to have a PC just for myself. It was 1996 and I clearly remember that I was looking fascinated to the 'Haunted House' screen-saver, thinking it was magical. Since then, I've always had an interest towards anything was computer-related: with myspace and the first theming experiments in pure HTML and CSS, later when I was a teenager I used mIRC to communicate with people in the we and In 2020 I was a newbie which could compile HTML, CSS and JS small project at 360°, starting from the UX/UI process to the true development part. Since then I’ve gained every day more development and design skills, knowledge and responsibilities in a very short time, always demonstrating that I could achieve a solid know-how autonomously for each project I put my hands on. I’m a Font-end Developer with the plus of having practical an theoretical skills in applying UX and UI principles to code and a insatiable curiosity towards many aspects of Computer Science and Automation."
      />
     <Tools />
    </div>
    <WaveTop>
      <Wave />
    </WaveTop>
  </Layout>
)

export default IndexPage

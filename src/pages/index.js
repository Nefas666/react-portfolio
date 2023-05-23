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
          <h1>Selene Manno.</h1>
          <h3>I enjoy coding things that live on the web.</h3>{" "}
          <h6>
            {" "}
            I'm a frontend developer also specialized in working with backend
            programming languages and environments. I'm currently working as
            Creative Developer @DigiTouch and just enrolled into the CS50 –
            Introduction to Computer Science course @ Harvard University.
          </h6>
          <p></p>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2 id="projects"> Some Things I’ve Built </h2>
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
      <div className="Cards">
        <h2 id="projects-to-be"> Things I'm currently working on </h2>
        <div className="CardGroup">
          <Card
            title="🪂Prompt me Tender 🪂"
            description="Travel App to help choosing where to travel built with Open-AI APIs, Next.js, Tailwind and Cypress for testing."
            url="https://prompt-me-tender.netlify.app/"
            img={reactBg}
          />
        </div>
      </div>
      <Section
        title="Learn. Code. Sleep. Repeat."
        text="As daughter👩‍👧 of a COBOL programmer, I was fortunate enough to have my own PC 💻 at a young age in 1996. I vividly recall being mesmerized by the 🌕'Haunted House'🏚️🦉 screen-saver, believing it to be magical. Since then, my fascination with all things computer-related has persisted. It began with Myspace👥 and my initial attempts at theming using pure HTML and CSS. Later, as a teenager, I communicated with others using mIRC and even collaborated in a ForumCommunity space. The internet has always captured my attention, and over time, its inner workings became increasingly clear💡."
        textAdditional="In 2015, I started my career as a Social Media Manager for Social Networks📱 and Content Creator for Blogs, which prompted me to delve into the world of CMS, specifically Wordpress. My curiosity about its logical functioning piqued my interest and motivated me to enroll in a Web Design📖 course to pursue a new career path🚵." 
        textAdditional1="By 2020, I was a novice capable of handling small projects that involved HTML, CSS, and JS, from the UX/UI process to the actual development stage. Since then, I have been rapidly acquiring development and design skills, knowledge, and responsibilities. I consistently demonstrate the ability to autonomously achieve solid know-how for each project I undertake. As a front-end developer, I have practical and theoretical skills in applying UX and UI principles to code, as well as an insatiable curiosity about many aspects of Computer Science and Automation🤖."
      />
      <Tools
      sectionTitle="Most of the time I operate on frontend libraries to accomplish my tasks but I'm always thrilled when I can challenge myself in delving into backend environments and using REST API's " />
    <WaveTop>
      <Wave />
    </WaveTop>
    </div>
  </Layout>
)

export default IndexPage

import React from "react"

import styled from "styled-components"
// import gif from "../images/avatar.gif"
import Wave from "./Wave"
 // will return static version on server and "live" version on client
import "./layout.css"

const SectionGroup = styled.div`
  
  min-height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
  box-shadow: var(--shadow-elevation-high);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background: rgb(163,120,217);
  background: linear-gradient(0deg, rgba(163,120,217,0) 0%, rgba(163,120,217,0.25) 100%);
`
// const SectionLogo = styled.img`
//   width: 228px;
//   margin: 0 auto;
//   align-self:top;
// `

const SectionTitleGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  font-weight: 700;
  background: rgb(26, 3, 42);
  background: linear-gradient(
    90deg,
    rgba(26, 3, 42, 0.9346113445378151) 0%,
    rgba(26, 3, 42, 0.6993172268907564) 50%,
    rgba(26, 3, 42, 0.39119397759103647) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: rgba(51, 51, 51, 0.838);
  font-size: 40px;

  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 30px;
    text-align: center;
  }
`

const SectionText = styled.h4`
  color: rgba(51, 51, 51, 0.838);
  font-weight: 200;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: 720px) {
    padding: 0 20px;
    font-size: 14px;
  }
`


const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -106px;
  transform: rotate(180deg);
  opacity: 0.25;
`

const Section = props => (
  <div id="bio">
    <SectionGroup>
      
      <SectionTitleGroup>
          <SectionTitle> {props.title} </SectionTitle>
          <SectionText> {props.text} </SectionText>
          <SectionText> {props.textAdditional} </SectionText>
          <SectionText> {props.textAdditional1} </SectionText>
      </SectionTitleGroup>
    </SectionGroup>
    
  </div>
)

export default Section

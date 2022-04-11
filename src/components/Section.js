import React from "react"
import styled from "styled-components"
import gif from "../images/avatar.gif"
import Wave from "./Wave"

const SectionGroup = styled.div`
  margin: 100px 0 0;
  background: url(${props => props.image});
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`
const SectionLogo = styled.img`
  width: 128px;
  margin: 0 auto;
  align-self:top;
`

const SectionTitleGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 320px auto;
  grid-template-rows: auto 100%;

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
  font-size: 50px;
  margin: -180px 0;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 44px;
    text-align: center;
  }
`

const SectionText = styled.p`
  color: rgba(51, 51, 51, 0.838);
  font-size: 22px;
  line-height: 1.2;
  margin: -180px 0;
  @media (max-width: 720px) {
    margin: -100px 0;
    padding: 0 20px;
    font-size: 22px;
  }
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -5px;
  opacity: 0.25;
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
    <SectionGroup image={props.image}>
    <SectionLogo src={gif}/> 
      <WaveTop>
        
        <Wave />
      </WaveTop>
      <WaveBottom>
        
        <Wave />
      </WaveBottom>
      <SectionTitleGroup>
        <SectionTitle> {props.title} </SectionTitle>
        <SectionText> {props.text} </SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  </div>
)

export default Section

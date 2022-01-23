import React from "react"
import styled from "styled-components"
import gif from "../images/game.gif"
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
  align-self: end;
`

const SectionTitleGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 360px auto;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: rgba(51, 51, 51, 0.838);
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: rgba(51, 51, 51, 0.838);
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
  opacity: 0.25;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -107px;
  transform: rotate(180deg);
  opacity: 0.25;
`

const Section = props => (
  <div>
    <SectionGroup image={props.image}>
      <SectionLogo src={gif} />
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

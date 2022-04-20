import * as React from "react"

import LayoutVariant from "../components/layoutVariant"
import styled from "styled-components"

const ThankYouTitle = styled.h3`
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
  text-align:center;
  @media (max-width: 800px) {
    font-size: 44px;
  }
  `
  const ThankYouSection = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 10vh;
  `

  const ThankYouP = styled.p`
  font-size: 18px;
  color: rgba(51, 51, 51, 0.838);
  font-weight: 300;
  text-align:center;  
`

const ThankYouPage = () => (
        <LayoutVariant>
                <ThankYouSection>
                        <ThankYouTitle>Thank you for your message!</ThankYouTitle>
                        <ThankYouP>I'll get back to you asap :)</ThankYouP>
                </ThankYouSection>
        </LayoutVariant>
        
)

export default ThankYouPage

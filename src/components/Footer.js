import React from "react"
//import PropTypes from "prop-types"
//import { Link } from "gatsby"
//import Wave from "./Wave"
import styled from "styled-components"


const FooterBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
  
`
const FooterImage = styled.img`
height:50px;
width:50px;
  
`
const FooterHref = styled.a`
  
`




const Footer = props =>(
    <footer className="FooterSection">
        <FooterBox>
            <FooterImage src = {props.src} ></FooterImage>
            <FooterHref href={props.href}>{props.value}</FooterHref>
        </FooterBox>
    </footer>
   
)
export default Footer

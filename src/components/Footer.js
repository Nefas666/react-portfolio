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
padding:20px 0px;
  
`
const FooterImage = styled.img`
width:40px;
padding-bottom:30px;
opacity:0.6;
`
const FooterHref = styled.a`
padding-bottom:30px;
text-indent: 25px;
color:rgba(181, 132, 209, 0.962);
`

const Footer = props =>(
    <section className="FooterSection">
        <FooterBox>
            <FooterImage src = {props.src}></FooterImage>
            <FooterHref href={props.href}>{props.value}</FooterHref>
        </FooterBox>
    </section>
   
)
export default Footer

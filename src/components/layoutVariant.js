/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import HeaderVariant from "./headerVariant"
import Footer from "./Footer"

import footerdata from "../../footerdata.json"
import styled from "styled-components"

import "./layout.css"

const ReactFooterContainer = styled.section`
  margin-top: 120px;
  text-align: center;
  color: rgba(181, 132, 209, 0.962);
`

const LayoutVariant = ({ children }) => {
  

  return (
    <div>
      <HeaderVariant />
      <main> {children} </main>
      <footer>
        <ReactFooterContainer>
          
          {footerdata.footers.map(footer => (
            <Footer
              value={footer.value}
              href={footer.href}
              src={footer.src || ""}
            />
          ))}
          <div className="FooterCopyRight">
            <p> Developed with &#10084; &nbsp;</p> 
            <p>Selene Manno</p>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </ReactFooterContainer>
      </footer>
    </div>
  )
}

LayoutVariant.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutVariant

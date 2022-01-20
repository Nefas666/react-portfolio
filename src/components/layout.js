/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./Footer"

import footerdata from "../../footerdata.json"
import styled from "styled-components"

import "./layout.css"

const ReactFooterContainer = styled.section`
 margin-top:200px; 
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata },
        ]}
      />
      <Header />
      <main> {children} </main>
      <ReactFooterContainer>
      {footerdata.footers.map(footer => (
          <Footer
            value={footer.value}
            href={footer.href}
            src={footer.src || ""}
          />
        ))}

      </ReactFooterContainer>
    <div className="FooterCopyRight">
      <span>© {new Date().getFullYear()} S M</span>
    </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

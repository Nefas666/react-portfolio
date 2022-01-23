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
  margin-top: 150px;
  text-align: center;
  color: rgba(181, 132, 209, 0.962);
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
        meta={[{ name: "description", content: data.site.siteMetadata }]}
      />
      <Header />
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
            <span> Developed with &#10084; </span>
            <span>© {new Date().getFullYear()} S M</span>
          </div>
        </ReactFooterContainer>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import * as React from "react"
//import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/avatar.gif"
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div
        className={
          this.state.hasScrolled ? "Header HeaderHasScrolled" : "Header"
        }
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={logo} width="60" />
          </Link>
          <Link to="#projects/"> Projects </Link> <Link to="#bio/"> Bio </Link>
          <Link to="/contact/"> Contact </Link>
        </div>
      </div>
    )
  }
}

export default Header

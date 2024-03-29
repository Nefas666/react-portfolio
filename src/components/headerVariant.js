import * as React from "react"
//import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/avatar.gif"
import "./HeaderVariant.css"

class HeaderVariant extends React.Component {
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
        <div className="HeaderGroupPr">
          <Link to="/">
            <img src={logo} width="40" />
          </Link>
          <Link to="/"> Home</Link>
        </div>
      </div>
    )
  }
}

export default HeaderVariant

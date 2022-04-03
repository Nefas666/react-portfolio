import * as React from "react"

import LayoutVariant from "../components/layoutVariant"
import Form from "../components/Form"

const ContactPage = () => (
  <LayoutVariant>
      <div className="Hero">
        <div className="HeroGroup">
          <div className="FormContainer">
            <h1>Let's keep in touch!</h1>
        <Form />
        </div>
        </div>
      </div>
  </LayoutVariant>
)

export default ContactPage

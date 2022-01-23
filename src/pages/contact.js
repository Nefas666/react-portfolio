import * as React from "react"

import Layout from "../components/layout"
import Form from "../components/Form"

const ContactPage = () => (
  <Layout>
      <div className="Hero">
        <div className="HeroGroup">
          <div className="FormContainer">
            <h1>Let's keep in touch!</h1>
        <Form />
        </div>
        </div>
      </div>
  </Layout>
)

export default ContactPage

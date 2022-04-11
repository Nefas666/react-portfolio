import { navigate } from 'gatsby-link'
import React from "react"
import Layout from './layoutVariant'
import "./Form.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
       <div className="Hero">
        <div className="HeroGroup">
          <div className="FormContainer">
            <h1>Let's keep in touch!</h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
          📛 :
            <input type="text" name="name" placeholder="Enter your full name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
          📧 :
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
          💬 :
            <textarea name="message" placeholder="Enter your message or just say hi :)" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
        </div>
        </div>
      </div>
    </Layout>
  )
}
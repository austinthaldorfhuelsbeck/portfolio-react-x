// Dependencies
import { useState } from "react"
import { useForm } from "react-hook-form"
import { init, sendForm } from "emailjs-com"

// Components
import BackBar from "../../Components/BackBar/BackBar"

// CSS
import "./contact.css"

// Emailjs init
init("user_CvpPf1sJ7rZo6giCrFhIr")

export default function Contact() {
  /* Emailjs secret variables */
  const {
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID
  } = process.env

  /* Form state and thank you message state */
  const { register, handleSubmit, watch } = useForm()
  const [isThankYou, setIsThankYou] = useState(false)

  /* Submit handler using emailjs */
  const onSubmit = data => {

    /* Select form element to force reset */
    const form = document.querySelector("#contact-form")
    
    /* Emailjs configuration, send, response handle */
    sendForm(
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      "#contact-form"
    )
      .then(response => {
        console.log("SUCCESS!", response.status, response.text)
        setIsThankYou(true)
        form.reset()
      }, error => {
        console.log("FAILED...", error)
      })

  }

  /* Keep track of characters remaining in message */
  const message = watch("message") || ""
  const messageCharsLeft = 1500 - message.length

  return (
    <>
      {/* Render BackBar first */}
      <BackBar />

      <div className="contact">
        {/* Header and conditional thank you */}
        <h1>Get in touch</h1>
        {isThankYou && <h3>Thank you for inquiring!</h3>}
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>

          {/* Name, required */}
          <label>Name*</label>
          <input
            type="text"
            {...register("user_name", { required: true, maxLength: 80 })}
          />

          {/* Email, required */}
          <label>Email*</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />

          {/* Phone number */}
          <label>Phone number</label>
          <input
            type="tel"
            {...register("phone_number", {
              required: false,
              maxLength: 11,
              minLength: 8
            })}
          />

          {/* Message, required */}
          <label>Message*</label>
          <textarea
            type="textarea"
            {...register("message", {
              required: true,
              height: 9,
              maxLength: 1500
            })}
          />

          {/* Display characters remaining */}
          <p className="message-chars-left">{message.length + " / " + messageCharsLeft}</p>

          <input type="submit" />

        </form>
      </div>
    </>
  )
}
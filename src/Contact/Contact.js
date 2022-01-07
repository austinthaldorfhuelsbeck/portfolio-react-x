import { useForm } from "react-hook-form"

import BackBar from "../BackBar/BackBar"

import "./contact.css"

export default function Contact() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <>
      <BackBar />
      <div className="contact">
        <h1>Get in touch</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name*</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 80 })}
          />
          <label>Email*</label>
          <input
            type="text"
            {...register("Email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          <label>Mobile number</label>
          <input
            type="tel"
            {...register("Mobile number", {
              required: false,
              maxLength: 11,
              minLength: 8
            })}
          />
          <label>Message</label>
          <textarea
            type="textarea"
            {...register("Message", {
              required: true,
              height: 9,
              maxLength: 5000
            })}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  )
}
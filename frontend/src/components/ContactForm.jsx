import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "nsusn-contact-mrd",
        "nsusn-contact-mrd",
        form.current,
        "mH6d_RzQNvNI8N3_e",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Contact Form</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label className="block p-5">
          Name
          <input
            type="text"
            name="user_name"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="block p-5">
          Email
          <input
            type="email"
            name="user_email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="block p-5">
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="block p-5">
          Message
          <textarea
            name="message"
            className="textarea textarea-bordered"
            placeholder="Write Message"
          />
        </label>
        <input
          className="m-3 rounded-md bg-red-400 p-3"
          type="submit"
          value="Send"
        />
      </form>
    </>
  );
};

export default ContactForm;

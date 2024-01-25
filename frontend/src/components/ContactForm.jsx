import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import ContactAnimation from "../lotties/ContactAnimation.json";

const ContactForm = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
    <main className="m-auto mb-10 w-full p-5 md:w-[900px]">
      <h1 className="p-5 text-center text-3xl font-bold">
        Get In Touch With Us
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

        <div className="w-full md:w-1/2">
          <form ref={form} onSubmit={sendEmail} action="" className="">
            <div className="form__div">
              <input
                name="user_name"
                type="text"
                className="form__input"
                placeholder=" "
              />
              <label className="form__label">Name</label>
            </div>

            <div className="form__div">
              <input
                name="user_email"
                type="email"
                className="form__input"
                placeholder=" "
              />
              <label className="form__label">Email</label>
            </div>

            <div className="form__div">
              <input
                name="subject"
                type="text"
                className="form__input"
                placeholder=" "
              />
              <label className="form__label">Subject</label>
            </div>

            <div className="form__div">
              <textarea
                name="message"
                className="form__textarea"
                placeholder="Message"
              />
            </div>

            <input
              type="submit"
              className="form__button"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;

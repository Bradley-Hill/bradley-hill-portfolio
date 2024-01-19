import "../app/styles/Contact.css";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Invalid email address");
      return;
    }

    emailjs
      .sendForm(
        "service_b6knv4a",
        "template_cifysnn",
        e.currentTarget,
        "Cz0GNgbDcrkQ3i2_w"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div
        className="lg:text-center"
        style={{
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <h2 className="text-4xl text-gray-600 font-bold tracking-wide uppercase">
          Socials
        </h2>
      </div>
      <div className="social-media" style={{ marginBottom: "2rem" }}>
        <a href="https://twitter.com/KingmObYojimbo">
          <FaTwitter />
        </a>
        <a href="https://github.com/Bradley-Hill">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/hill.bradley/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/bradley-michael-hill/">
          <FaLinkedin />
        </a>
      </div>
      <div className="bg-gray-100">
        <div
          className="lg:text-center"
          style={{ marginBottom: "1rem", textAlign: "center" }}
        >
          <h2
            id="contact"
            className="text-4xl text-gray-600 font-bold tracking-wide uppercase"
          >
            Contact Me
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            maxHeight: "350px",
            margin: "0 auto",
            padding: 0,
          }}
        >
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="submit-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      <div>
        <a href="https://twitter.com/YOUR_TWITTER_HANDLE">
          <FaTwitter />
        </a>
        <a href="https://github.com/YOUR_GITHUB_HANDLE">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_HANDLE/">
          <FaLinkedin />
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
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
        <button type="submit">Send</button>
      </form>
    </>
  );
}

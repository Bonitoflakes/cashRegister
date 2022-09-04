import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function MyFooter() {
  return (
    <footer id="footer" class="footer">
      <h2>Let`s connect.</h2>
      <div class="icons">
        <a class="icon" href="https://www.instagram.com/_memphisto/">
          <FaInstagram />
        </a>
        <a class="icon" href="https://github.com/Bonitoflakes">
          <FaGithub />
        </a>
        <a
          class="icon"
          href="https://www.linkedin.com/in/rishab-khivsara-196383202/"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}

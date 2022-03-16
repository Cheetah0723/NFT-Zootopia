// import email from "../img/email.png"
import logo from "../img/logo.png"
import "../styles/contact.css"
import { BiMailSend } from "react-icons/bi"

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contact-introduction">
        <a href="home">
          <img src={logo} />
        </a>
        <p>
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply
          dummy text of the printing and type.
        </p>
      </div>
      <div className="quicklinks">
        <h2>Quick Links</h2>
        <div className="small-line" />
        <ul>
          <li>
            <a href="info">-About Us</a>
          </li>
          <li>
            <a href="roadmap">-Road Map</a>
          </li>
          <li>
            <a href="faq">-FAQ</a>
          </li>
          <li>
            <a href="team">-Team</a>
          </li>
          <li>
            <a href="mint">-Mint</a>
          </li>
          <li>
            <a href="games">-Games</a>
          </li>
        </ul>
      </div>
      <div className="help">
        <h2>Help</h2>
        <div className="small-line" />
        <ul>
          <li>
            <a href="#">-Support</a>
          </li>
          <li>
            <a href="#">-Terms & Conditions</a>
          </li>
          <li>
            <a href="#">-Privacy Policy</a>
          </li>
          <li>
            <a href="#">-Refund Policy</a>
          </li>
          <li>
            <a href="#">-Support</a>
          </li>
        </ul>
      </div>
      <div className="newsletter">
        <h2>Newsletter</h2>
        <div className="small-line" />
        <p>Duis aute irure dolor in reprehen derit in voluptate velit.</p>
        <div className="email">
          <input type="email" placeholder="Enter email address" />
          <a href="#">
            <BiMailSend />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

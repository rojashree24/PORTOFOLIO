import classes from "./Contact.module.css";

import EmailForm from "./EmailForm";

import { FiMail, FiSmartphone, FiMapPin, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>

      <div className={classes.contact}>
        <div className={classes.location} data-aos="fade-right">
          <div style={{ marginBottom: "20px" }}>
            <span>
              {" "}
              <FiMapPin />
            </span>{" "}
            <h3>Location:</h3>
            <div className={classes.contactText}>
              206, 2nd floor. Block-A
              S.I.S.Sintra Apartment
              Unaimancherry Main road
              KOLAPPAKKAM (BO) 
              Vandalur Taluk
              Chengalpattu District
              Tamilnadu.
              India.
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiMail size={"20px"} />
            </span>{" "}
            <h3>Email:</h3>
            <div className={classes.contactText} style={{ marginLeft: "45px" }}>
              rojashree24@gmail.com
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiSmartphone />
            </span>{" "}
            <h3>Call:</h3>
            <div>+91 7904626307</div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiLinkedin />
            </span>{" "}
            <h3>Linkedin:</h3>
            <div>
              <a
                style={{ textDecoration: "none", color: "#000" }}
                className={classes.contactText}
                href="https://www.linkedin.com/in/rojashree-vijay-766b0920a"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/rojashree-v-766b0920a
              </a>
            </div>
          </div>
        </div>
        <div className={classes.emailSend} data-aos="fade-left">
          <EmailForm />
        </div>
      </div>
    </>
  );
};

export default Contact;

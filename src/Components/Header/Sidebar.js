import * as FaIcon from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiFreelancer } from "react-icons/si";
import { Link } from "react-scroll";

import classes from "./Sidebar.module.css";
import photo from "../../Assets/photo.jpeg";

const icons = [
  {
    id: 1,
    name: <FaIcon.FaHome />,
    text: "Home",
    link: "home",
  },
  {
    id: 2,
    name: <FaIcon.FaUser />,
    text: "About",
    link: "about",
  },

  {
    id: 3,
    name: <FaIcon.FaCode />,
    text: "Skills",
    link: "skills",
  },
  {
    id: 4,
    name: <FaIcon.FaLaptopCode />,
    text: "Projects",
    link: "projects",
  },
  {
    id: 5,
    name: <FaIcon.FaPhoneAlt />,
    text: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  return (
    <>
      <div className={classes.navbar}>
        <header className={classes.header}>
          <img src={photo} alt="my profile " />

          <div className={classes.name}>Rojashree</div>
          <div className={classes.socialIcons}>
            
            <a href="https://github.com/rojashree24" target="_blank" rel="noreferrer">
              <FaIcon.FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rojashree-vijay-b4813a20b/" target="_blank" rel="noreferrer">
              <FaIcon.FaLinkedin />
            </a>
           
            
          </div>
        </header>
        <IconContext.Provider value={{ color: "#a8a9b4", size: "1.3rem" }}>
          <nav className={classes.list}>
            <ul>
              {icons.map((icon) => (
                <li key={icon.id}>
                  <Link
                    to={icon.link}
                    spy={true}
                    smooth={true}
                    offset={-7}
                    duration={1500}
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    {icon.name}
                    <span>{icon.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </IconContext.Provider>
        <footer className={classes.footer}>
          Copyright @ 2022 <br />
          <span>
 <span style={{ color: "#00a6eb" }}>Rojashree</span>
          </span>
        </footer>
      </div>
    </>
  );
};

export default Navbar;

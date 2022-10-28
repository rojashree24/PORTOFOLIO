import classes from "./Projects.module.css";

import groceryImg from "../../../Assets/todo.jpeg";
import socialImg from "../../../Assets/newsletter.jpg";
import campImg from "../../../Assets/music.jpeg";
import notesImage from "../../../Assets/notesImage.jpg";
// import groceryImg from "../../../Assets/grocery.png";
// import socialImg from "../../../Assets/socialmedia.png";
// import campImg from "../../../Assets/camp2.png";

const Projects = () => {
  return (
    <>
      <h2 >Projects</h2>
      <p>
        Hard-working web developer with a flair for creating elegant solutions
        in the least amount of time.
      </p>

      <div className={classes.project}>
        <div className={classes.projectItem1}>
          <div data-aos="fade-right">
            <img src={groceryImg} alt="grocery" />
          </div>
          <div data-aos="fade-left"> 
            <p style={{ paddingLeft: "20px" }}>
               {/* A customer Can order a product{" "}
              and Only admins can create, edit , delete the products and
               check the customer ordered products.{" "} */}
               This is just a simple To Do List.
               Every person has got his or her to-do list.
In the to-do list, you can properly arrange your daily life schedule. If not so, you can note down your list of goals to attain in a year or so. I have included Database.
              <a
                href="https://todolistagenda.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://todolistagenda.herokuapp.com/
              </a>
            </p>
          </div>
        </div>
        <div className={classes.projectItem2}>
          <div data-aos="fade-right">
            <p style={{ paddingRight: "20px" }}>
              This is a newsletter sign up form built using pure Express js. Through this sign up form we can able to find who are all trying to sign up in mailchimp. Basically Mailchimp is an all-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties.  <br />{" "}
              <a
                href="https://newslettersignup-application.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://newslettersignup-application.herokuapp.com/
              </a>
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={socialImg} alt="grocery2" />
          </div>
        </div>
        <div className={classes.projectItem3} data-aos="fade-right">
          <div>
            <img src={notesImage} alt="grocery3" />
          </div>
          <div data-aos="fade-left">
            <p style={{ paddingLeft: "20px" }}>
              In this application , we can write a note whatever we want like to perform anything or remainder of important events like various stuffs , and we can also delete that notes.I created it with React.js <a rel="noreferrer" href="https://notesgetter.netlify.app/" target="_blank">
            https://notesgetter.netlify.app/
          </a>
            </p>
          </div>
        </div>

        

      </div>

    </>
  );
};

export default Projects;

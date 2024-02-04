import { Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BotButton from "../components/BotButton";
import PortfolioBox from '../components/PortfolioBox';

export default function Hobbies() {
  
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Photographer",
      "Video Editor",
      "Motorcycle Enthusiast",
      "Free Diver",
      "Musician",
    ],
    loop: 0,
    typeSpeed: 200,
    delaySpeed: 180,
  });
  return (
    <>
      <CustomNavbar />
      <div className="firstdiv">
        <img className="myimg" src="myimg.png" alt="My Image" />
        <br />

        <h3>Hello, It's Me</h3>
        <h1 className="myname">John Anthony Magalona</h1>
        <h3>
          And I'm a <span className="typing">{text}</span>
          <Cursor cursorStyle="<"></Cursor>
        </h3>
        <div className="socialmedia">
          <a href="https://web.facebook.com/anthony.magalona1997">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="https://github.com/iamanthony14">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
      <Container>
        <div className="hobbies">
          <section className="portfolio" id="portfolio">
            <h2 className="heading">My Hobbies</h2>

            <div className="portfolio-container">
              <PortfolioBox imageSrc="coding.png" title="Coding" />
              <PortfolioBox imageSrc="anime.png" title="Watching Anime" />
              <PortfolioBox imageSrc="guitar.jpg" title="Playing Guitar" />
              <PortfolioBox imageSrc="diving.jpg" title="Diving" />
              <PortfolioBox imageSrc="gaming.jpeg" title="Gaming" />
              <PortfolioBox imageSrc="read.jpg" title="Reading" />
            </div>
          </section>
        </div>

        <div></div>
        
      </Container>
      <BotButton modalTitle="Daily Reminder" modalImageSrc={"/notes.jpg"}  />
    </>
  );
}

import { Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import { Cursor, useTypewriter } from "react-simple-typewriter";
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
      <Container className="mt-5">
        {/* <div className="heroblack">
          <div className="text-center">
            <img className="myimg" src="myimg.png" alt="My Image" />
            <br />
            <h3>Hello, It's Me</h3>
            <h1>John Anthony Magalona</h1>
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
        </div> */}
        <div className="heroblack2">
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
        <div className="hobbies">
          <section className="portfolio" id="portfolio">
            <h2 className="heading">
              My Hobbies
            </h2>

            <div className="portfolio-container">
              <div className="portfolio-box">
                <img src="coding.png" alt="" />
                <div className="portfolio-layer">
                  <h4>Coding</h4>
                  <p>
                    
                  </p>
                 
                </div>
              </div>

              <div className="portfolio-box">
                <img src="anime.png" alt="" />
                <div className="portfolio-layer">
                  <h4>Watching Anime</h4>
                  <p>
                    
                  </p>
                  
                </div>
              </div>

              <div className="portfolio-box">
                <img src="guitar.jpg" alt="" />
                <div className="portfolio-layer">
                  <h4>Playing Guitar</h4>
                  <p>
                    
                  </p>
                  
                </div>
              </div>

              <div className="portfolio-box">
                <img src="diving.jpg" alt="" />
                <div className="portfolio-layer">
                  <h4>Diving</h4>
                  <p>
                    
                  </p>
                  
                </div>
              </div>

              <div className="portfolio-box">
                <img src="gaming.jpeg" alt="" />
                <div className="portfolio-layer">
                  <h4>Gaming</h4>
                  <p>
                    
                  </p>
                  
                </div>
              </div>

              <div className="portfolio-box">
                <img src="read.jpg" alt="" />
                <div className="portfolio-layer">
                  <h4>Reading</h4>
                  <p>
                    
                  </p>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div>

        </div>
      </Container>
    </>
  );
}

import {
  Container,
  Button,
  Row,
  Col,
  Form
} from "react-bootstrap";
import CustomNavbar from "../components/Navbar";

export default function Home() {
  
  return (
    <>
      <CustomNavbar />
      <div className="hero">
        <div className="text-center">
          <Container className="mt-5">
            <h1>Digital Transformation</h1>
            <Form className="mt-5" >
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  <p>Created By</p>
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" className="custom-input" placeholder="Full Name"/>
                </Col>
              </Form.Group>
            </Form>
            <Row className="mt-3">
              <Col xs={6}>
                <div className="d-grid gap-2 ">
                  <Button href="Calculator" variant="dark" size="lg">
                    Calculator Sample
                  </Button>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-grid gap-2">
                  <Button href="Json" variant="dark" size="lg">
                    JSON Sample
                  </Button>
                </div>
              </Col>
            </Row>

            <Container className="mt-4 p-3 rounded cardblur">
              <div className="cardblurcont ">
                <h2>My Hobbies</h2>
                <p>
                  Hi! My name is John. By clicking the button below you will learn
                  more about me.
                </p>
                <Button variant="secondary" href="Hobbies">Learn More</Button>
              </div>
            </Container>
          </Container>
        </div>
      </div>
    </>
  );
}

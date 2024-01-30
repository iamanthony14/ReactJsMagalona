import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import CustomNavbar from "../components/Navbar";

export default function Calculator() {
  const [expression, setExpression] = useState("0");

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      const keyPressed = event.key;

      if (/^[0-9+\-*/=C]$/.test(keyPressed)) {
        // if (keyPressed === "=") {
        //     handleEvaluate();
        // } else if (keyPressed === "C") {
        //     handleClear();
        // } else {
        //     handleButtonClick(keyPressed);
        // }
      } else if (keyPressed === "Enter") {
        handleEvaluate();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [expression]);

  const handleButtonClick = (value: any) => {
    if (expression == "0") {
      setExpression(value);
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const handleClear = () => {
    setExpression("0");
  };

  const handleEvaluate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const buttonLayout = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  return (
    <>
      <CustomNavbar />
      <Container
        style={{ maxWidth: "350px" }}
        className="d-flex flex-column align-items-center justify-content-center vh-95">
        <p className="calcTextField">{expression}</p>
        <Container>
          <Row className="justify-content-center">
            {buttonLayout.map((btnValue, index) => (
              <Col key={index} xs={3} className="mb-2">
                <Button
                  type="button"
                  tabIndex={-1}
                  className={`${
                    (index + 1) % 4 === 0 && "calcButtonSpecial"
                  } calcButton`}
                  onClick={() => {
                    if (btnValue === "=") {
                      handleEvaluate();
                    } else if (btnValue === "C") {
                      handleClear();
                    } else {
                      if (
                        (btnValue === "+" ||
                          btnValue === "-" ||
                          btnValue === "*" ||
                          btnValue === "/") &&
                        expression === "0"
                      )
                        return;
                      else {
                        handleButtonClick(btnValue.toString());
                      }
                    }
                  }}>
                  {btnValue}
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

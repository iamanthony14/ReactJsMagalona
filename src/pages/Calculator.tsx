import { useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import Button from "../components/CalcButton"; 

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (input === "Error") {
      setInput(value);
    } else {
      // Check if the current input is '0' and the new value is also '0'
      if (input === "0" && value === "0") {
        // Do nothing (prevent adding multiple zeros)
      } else if (input === "0") {
        // If the current input is '0' and the new value is not '0', replace '0' with the new value
        setInput(value);
      } else {
        setInput((prevInput) => prevInput + value);
      }
    }
  };

  const handleReset = () => {
    setInput("");
  };


  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <>
      <CustomNavbar />
      <div className="titletop">
        <h1>CALCULATOR</h1>
      </div>
      <Container>
        <div className="calcumain">
          <div className="calculator">
            <div className="input" data-testid="display">
              {input}
            </div>
            <div className="buttons">
              <Button label="7" onClick={() => handleClick("7")} />
              <Button label="8" onClick={() => handleClick("8")} />
              <Button label="9" onClick={() => handleClick("9")} />
              <Button label="÷" onClick={() => handleClick("/")} />

              <Button label="4" onClick={() => handleClick("4")} />
              <Button label="5" onClick={() => handleClick("5")} />
              <Button label="6" onClick={() => handleClick("6")} />
              <Button label="×" onClick={() => handleClick("*")} />

              <Button label="1" onClick={() => handleClick("1")} />
              <Button label="2" onClick={() => handleClick("2")} />
              <Button label="3" onClick={() => handleClick("3")} />
              <Button label="-" onClick={() => handleClick("-")} />

              <Button label="C" onClick={handleReset} />
              <Button label="0" onClick={() => handleClick("0")} />
              <Button label="=" onClick={handleEvaluate} />
              <Button label="+" onClick={() => handleClick("+")} />
             
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

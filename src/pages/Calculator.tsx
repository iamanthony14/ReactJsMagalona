import { useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Container } from "react-bootstrap";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleReset = () => {
    setInput("");
  };

  // const handleClearEntry = () => {
  //   setInput((prevInput) => prevInput.slice(0, -1));
  // };

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
      <Container>
        <div className="calcumain">
          <div className="calculator">
            <div className="input" data-testid="display">
              {input}
            </div>
            <div className="buttons">
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("7")}>
                7
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("8")}>
                8
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("9")}>
                9
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("/")}>
                ÷
              </button>

              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("4")}>
                4
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("5")}>
                5
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("6")}>
                6
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("*")}>
                ×
              </button>

              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("1")}>
                1
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("2")}>
                2
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("3")}>
                3
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("-")}>
                -
              </button>

              <button className="btn btncal btnspecial" onClick={handleReset}>
                C
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("0")}>
                0
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={handleEvaluate}>
                =
              </button>
              <button
                className="btn btncal btnspecial"
                onClick={() => handleClick("+")}>
                +
              </button>
             
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

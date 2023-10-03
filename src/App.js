import { useState } from "react";
import "./App.css";

function App() {
  const [params, setParams] = useState("");
  const [validation, setValidation] = useState("");
  const checkValidParam = () => {
    const parenthesisOrder = {
      "(": ")",
    };
    const parenthesis = params;
    const stack = [];
    if (parenthesis === "") {
      setValidation("Not Valid");
      return;
    }

    for (let i = 0; i < parenthesis.length; i++) {
      if (parenthesisOrder[parenthesis.charAt(i)]) {
        stack.push(parenthesis[i]);
      } else {
        if (parenthesisOrder[stack.pop()] !== parenthesis[i]) {
          setValidation("Not Valid");
          return;
        }
      }
    }
    stack.length === 0 ? setValidation("Valid") : setValidation("Not Valid")
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Check Valid Paranthesis</h1>

          <input
            type="text"
            placeholder="Give valid parenthesis"
            value={params}
            style={{ padding: "8px 16px", borderRadius: "10px" }}
            onChange={(e) => setParams(e.target.value)}
          />
          <span
            style={{ fontSize: "14px", margin: "3px  0 0 3px" }}
          >
            {validation}
          </span>

          <button
            onClick={checkValidParam}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              width: "100px",
              borderRadius: "6px",
              padding: "5px",
              margin: "20px 0 0 0",
              textAlign: "center",
            }}
          >
            Check
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

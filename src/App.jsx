import { useEffect, useState, useRef } from "react";
import Logo from "../src/assets/images/logo.png";
import "./App.css";
import wasmMath from "./utils/loadWasm";

function App() {
  const [valueN, setValueN] = useState(1);
  const [valueB, setValueB] = useState(0);
  const resultRef = useRef();

  useEffect(() => {
    const A = wasmMath.then((res) => {
      resultRef.current.innerText = res
        .trafficOfferted(Number(valueN), Number(valueB) / 100)
        .toFixed(4);
    });
  }, [valueB, valueN]);

  return (
    <div>
      <figure>
        <img src={Logo} />
      </figure>
      <h1>Trafico Ofrecido</h1>
      <div style={{ marginTop: "0.5rem" }} className="group-input">
        <label htmlFor="Nvalue">
          <span>Número de circuitos [N]: </span>
          <input
            id="Nvalue"
            onChange={({ target }) => setValueN(() => target.value)}
            value={valueN}
          />
        </label>
      </div>
      <div style={{ marginTop: "0.5rem" }} className="group-input">
        <label htmlFor="Bvalue">
          <span>Probabilidad de perdida [B%]: </span>
          <input
            id="Bvalue"
            onChange={({ target }) => setValueB(() => target.value)}
            value={valueB}
          />
        </label>
      </div>

      <div style={{ marginTop: "4rem" }}>
        Trafico ofrecido: <span ref={resultRef}>0</span>
        <span> Erls</span>
      </div>
    </div>
  );
}

export default App;

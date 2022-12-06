import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import wasmMath from "../utils/loadWasm";

function TrafficOfertedPage() {
  const [valueN, setValueN] = useState(1);
  const [valueB, setValueB] = useState(0.01);
  const [result, setResult] = useState(0);

  useEffect(() => {
    wasmMath.then((res) => {
      setResult(
        res.trafficOfferted(Number(valueN), Number(valueB) / 100).toFixed(5)
      );
    });
  }, [valueB, valueN]);

  return (
    <Layout
      title="Calculo del tráfico ofrecido"
      firstLabel="Número de organos [N]"
      firstInput={
        <input
          onChange={({ target }) => setValueN(() => target.value)}
          value={valueN}
        />
      }
      secondLabel="Probabilidad de pérdida [B%]"
      secondInput={
        <input
          onChange={({ target }) => setValueB(() => target.value)}
          value={valueB}
        />
      }
      resultLabel="Tráfico ofrecido"
      resultUnit="Erls"
      result={result}
    />
  );
}

export default TrafficOfertedPage;

import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import wasmMath from "../utils/loadWasm";

function ErlangbPage() {
  const [valueN, setValueN] = useState(1);
  const [valueA, setValueA] = useState(0.01);
  const [result, setResult] = useState(0);

  useEffect(() => {
    wasmMath.then((res) => {
      setResult(res.lossErlangb(Number(valueN), Number(valueA)) * 100);
    });
  }, [valueA, valueN]);

  return (
    <Layout
      title="Calculo de Erlang B"
      firstLabel="Número de órganos [N]"
      firstInput={
        <input
          onChange={({ target }) => setValueN(() => target.value)}
          value={valueN}
        />
      }
      secondLabel="Trafico ofrecido [A]"
      secondInput={
        <input
          onChange={({ target }) => setValueA(() => target.value)}
          value={valueA}
        />
      }
      resultLabel="Probabilidad de pérdidas"
      resultUnit="%"
      result={result.toFixed(5)}
    />
  );
}

export default ErlangbPage;

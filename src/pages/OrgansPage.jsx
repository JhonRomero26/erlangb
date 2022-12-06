import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import wasmMath from "../utils/loadWasm";

function OrgansPage() {
  const [valueA, setValueA] = useState(1);
  const [valueB, setValueB] = useState(0.01);
  const [result, setResult] = useState(0);

  useEffect(() => {
    wasmMath.then((res) => {
      setResult(res.organsErlangb(Number(valueA), Number(valueB) / 100));
    });
  }, [valueB, valueA]);

  return (
    <Layout
      title="Calculo de número de órganos"
      firstLabel="Tráfico ofrecido [A]"
      firstInput={
        <input
          onChange={({ target }) => setValueA(() => target.value)}
          value={valueA}
        />
      }
      secondLabel="Probabilidad de pérdida [B%]"
      secondInput={
        <input
          onChange={({ target }) => setValueB(() => target.value)}
          value={valueB}
        />
      }
      resultLabel="Número de organos"
      resultUnit="Organos"
      result={result}
    />
  );
}

export default OrgansPage;

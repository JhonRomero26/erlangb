import { Link } from "wouter";
import logo from "../assets/images/logo.png";

function Layout({
  title,
  firstInput,
  firstLabel,
  secondInput,
  secondLabel,
  resultLabel,
  result,
  resultUnit,
}) {
  return (
    <>
      <figure>
        <img width="250" src={logo} />
      </figure>
      <h1 style={{ fontSize: "2.5rem" }}>{title}</h1>
      <ul>
        <li>
          <Link to="/">Tráfico ofrecido</Link>
        </li>
        <li>
          <Link to="/erlangb">Erlang B</Link>
        </li>
        <li>
          <Link to="/organs">Número de organos</Link>
        </li>
      </ul>
      <div style={{ marginTop: "0.5rem" }} className="group-input">
        <label htmlFor="Nvalue">
          <span>{firstLabel}: </span>
          {firstInput}
        </label>
      </div>
      <div style={{ marginTop: "0.5rem" }} className="group-input">
        <label>
          <span>{secondLabel}: </span>
          {secondInput}
        </label>
      </div>

      <div style={{ marginTop: "4rem" }}>
        {resultLabel}: <span>{result}</span> {resultUnit}
      </div>
    </>
  );
}

export default Layout;

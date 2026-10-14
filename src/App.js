import { useState } from "react";
import CartFrom from "./cartFrom";
import FormSubmit from "./form";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const submitForm = () => {
    setCount((prev) => prev + 1);
  };

  const Cartform = () => {
    setCount2((prev) => prev + 1);
  };

  const calc =
    (() => {
      return count + 1;
    },
    [count]);

  return (
    <div className="App">
      <FormSubmit submit={submitForm} />
      <CartFrom submit={Cartform} />
      <p>{count}</p>
      <p>{calc}</p>
      <p>{count2}</p>
    </div>
  );
}

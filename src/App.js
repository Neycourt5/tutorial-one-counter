import "./index.css";
import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid h-screen place-items-center">
      <cointainer>
        <Display count={count} />
      </cointainer>
      <cointainer className="flex space-x-4">
        <Button name="Count up" count={count} setCount={setCount} />
        <Button name="Count down" count={count} setCount={setCount} />
      </cointainer>
    </div>
  );
}

export default App;

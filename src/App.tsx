import React from "react";
import { Button } from "./component/button";
import { ButtonWrapper } from "@/ui/button-wrapper";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <Button />
      <ButtonWrapper />
    </div>
  );
}

export default App;

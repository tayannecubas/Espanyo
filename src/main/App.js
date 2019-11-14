import React from "react";
import "../styles.css";

import Top from "./Top";
import Rodape from "./Rodape";
import Centro from "../view/home/Centro";

export default function App() {
  return (
    <main>
      <Top />
      <Centro />
      <Rodape />
    </main>
  );
}

import "./App.scss";

import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import { useState } from "react";

function App() {
  const [palettesWithLifting, setPalettesWithLifting] = useState("");
  const handlePalettesWithLifting = (palettesValue) => {
    console.log("Has seleccionado la paleta ", palettesValue);
    setPalettesWithLifting(palettesValue);
  };

  const [palettesColor, setPalettesColor] = useState("");
  const changePalettesColor = () => {
    if (palettesWithLifting === "2") {
      setPalettesColor("palette-2 container__main-texts");
    }
  };

  return (
    <div className="App">
      <Header />
      <section className="divided">
        <Preview
          palettesColor={palettesColor}
          changePalettesColor={changePalettesColor}
        />
        <Form
          palettesWithLifting={palettesWithLifting}
          handlePalettesWithLifting={handlePalettesWithLifting}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;

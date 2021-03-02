import "./App.scss";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";

function CardGenerator() {
  const [data, setData] = useState({
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  });
  const [palettesWithLifting, setPalettesWithLifting] = useState("");
  const handlePalettesWithLifting = (palettesValue) => {
    console.log("Has seleccionado la paleta ", palettesValue);
    //setPalettesWithLifting(palettesValue);
    //data.palette=palettesValue; NO VALE
    setData({
      ...data,
      palette: palettesValue,
    });
  };

  const handleInput = (data) => {
    setData((prevState) => {
      return { ...prevState, [data.inputName]: data.inputValue };
    });
  };

  const handleReset = () => {
    setData({
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
  };

  return (
    <div className="App">
      <Header />
      <section className="divided">
        <Preview data={data} handleReset={handleReset} />
        <Form
          data={data}
          handleInput={handleInput}
          handleReset={handleReset}
          palettesWithLifting={palettesWithLifting}
          handlePalettesWithLifting={handlePalettesWithLifting}
        />
      </section>
      <Footer />
    </div>
  );
}

export default CardGenerator;
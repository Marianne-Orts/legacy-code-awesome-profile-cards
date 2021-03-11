import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import sendDataToApi from "../services/SendDataToApi";

import "./App.scss";

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

  const handleUpdateAvatar = (avatar) => {
    setData({
      ...data,
      photo: avatar,
    });
  };

  const handlePalettesWithLifting = (palettesValue) => {
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
      photo: "",
      palette: "1"
    });
  };

  const [responseApi, setResponseApi] = useState({
    explanationText: "",
    cardUrl: "",
    success: false,
  });

  const handleShareWithLifting = () => {
    sendDataToApi(data).then((response) => {
      setResponseApi((prevState) => {
        if (response.success === true) {
          return {
            ...prevState,
            explanationText: "La tarjeta ha sido creada:",
            cardUrl: response.cardURL,
            success: true,
          };
        } else {
          return {
            ...prevState,
            explanationText:
              "Ups! No se ha podido crear tu tarjeta. Rellena todos tus datos.",
            success: false,
          };
        }
      });
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
          handlePalettesWithLifting={handlePalettesWithLifting}
          handleShareWithLifting={handleShareWithLifting}
          handleUpdateAvatar={handleUpdateAvatar}
          responseApi={responseApi}
        />
      </section>
      <Footer />
    </div>
  );
}

export default CardGenerator;

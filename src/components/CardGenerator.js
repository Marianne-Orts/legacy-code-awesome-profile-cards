import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Share from "./Share";
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

  const [palettesWithLifting, setPalettesWithLifting] = useState("");
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
    });
  };
  const handleShareWithLifting = () => {
    sendDataToApi(data).then((response) => {
      /* linksContainer.classList.remove("share__hidden");
      if (data.success === true) {
        textUrl.innerHTML = "La tarjeta ha sido creada:";
        linkUrl.innerHTML = data.cardURL;
        linkUrl.href = data.cardURL;
        const urlTwitter = data.cardURL;
        twitterUrl.href = `https://twitter.com/intent/tweet?url=Échale%20un%20vistazo%20a%20mi%20tarjeta%20virtual%20${urlTwitter}`;
        twitterButton.classList.remove("twitterhidden");
      } else {
        textUrl.innerHTML =
          "Ups! No se ha podido crear tu tarjeta. Rellena todos tus datos.";
        linkUrl.href = "";
        linkUrl.innerHTML = "";
        twitterButton.classList.add("twitterhidden");
      }
    }); */
    });
  };
  const [responseApi, setResponseApi] = useState({
    explanationText: "",
    cardUrl: "",
  });

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
          handleShareWithLifting={handleShareWithLifting}
        />
      </section>
      <Footer />
    </div>
  );
}

export default CardGenerator;

import "./App.scss";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";

function App() {
  const [data, setData] = useState("");

  const handleInput = (data) => {
    setData((prevState) => {
      return { ...prevState, [data.inputName]: data.inputValue };
    });
  };

  const handleReset = () => {
    setData({
      [data.inputName]: "",
      [data.inputValue]: "",
    });
  };

  return (
    <div className="App">
      <Header />
      <section className="divided">
        <Preview data={data} handleReset={handleReset} />
        <Form data={data} handleInput={handleInput} handleReset={handleReset} />
      </section>
      <Footer />
    </div>
  );
}

export default App;

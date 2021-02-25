import "./App.scss";

import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";

function App() {
  const handlePalettesWithLifting = (palettesValue) => {
    console.log("Has seleccionado la paleta ", palettesValue);
    // los componentes funcionales no tienen this.forceUpdate()
    // así que no podemos forzar un re-renderizado
    // el re-renderizado lo haremos con React > Hooks > useState que se ve en la lección 3.6
  };

  // const changeColor = () => {
  //   if (palettesValue === "1") {
  //     newClass = {};
  //   }
  // };

  const [clasePalettes, setClasePalettes] = useState(""); //valor incial
  const funcionPalettes = () => {
    if (clasePalettes === "") {
      setClasePalettes("hidden");
    } else {
      setClasePalettes("");
    }

  return (
    <div className="App">
      <Header />
      <section className="divided">
        <Preview />
        <Form handlePalettesWithLifting={handlePalettesWithLifting} />
      </section>
      <Footer />
    </div>
  );
}

export default App;

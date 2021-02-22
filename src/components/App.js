import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import "./Variables.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="divided">
        <Preview />
        <Form />
      </section>
      <Footer />
    </div>
  );
}

export default App;

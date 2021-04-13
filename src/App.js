import Header from "./Header";
import Footer from "./Footer";

import Homepage from "./Homepage";
import Contact from "./Contact";
import Services from "./Services";

import Example from "./Example";

import { BrowserRouter, Route } from "react-router-dom";

import BootstrapDemo from "./BootstrapDemo";

function App() {
  return (
    <div>
      <BootstrapDemo />
      {/* <Example />
      <BrowserRouter>
        <Header />

        <main>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
        </main>

        <Footer />
      </BrowserRouter> */}
    </div>
  );
}

export default App;

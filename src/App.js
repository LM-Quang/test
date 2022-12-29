import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Home/Header/Header.js";
import About from "./Pages/About/About.js";
import Contact from "./Pages/Contact/Contact.js";
import Home from "./Pages/Home/Home.js";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;

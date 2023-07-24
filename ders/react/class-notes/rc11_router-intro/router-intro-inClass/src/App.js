import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import InstructorsDetail from "./pages/InstructorsDetail";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/instructors" element= {<Instructors/>} />
      <Route path="/instructors/:id" element= {<InstructorsDetail/>} />
      <Route path="/contact" element= {<Contact/>} />
      <Route path="*" element= {<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

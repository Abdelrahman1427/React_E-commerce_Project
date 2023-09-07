import "bootstrap/dist/css/bootstrap.min.css";
import SupportUs from "./Components/supportUs/supportUs";
// import Donation from "./Components/donation/donation";
import Home from "./Components/home/home";
import Shop from "./Components/shop/shop";
import About from "./Components/aboutUs/about";
import Navbar from "./Components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/signup/signup";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/supportUs" element={<SupportUs />} />
            {/* <Route path="/donation" element={<Donation />} /> */}
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

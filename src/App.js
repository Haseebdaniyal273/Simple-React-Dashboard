import Header from "./Components/Header";
import Sidebar from './Components/Sidebar';
// import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Join from "./Components/Join";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
///////////////Sidebar////////////////////
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Order from "./Components/Order";
import Analytics from "./Components/Analytics";
///////////////////////////////////////////


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Footer />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Join" element={<Join />} />

      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Login" element={<Login />} />
      <Route path="Order" element={<Order />} />
      <Route path="Analytics" element={<Analytics  />} />
      </Routes>
      </div>



 
 
 );
}


export default App;

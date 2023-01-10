import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import Header from '../headerNav/HeaderNav'

import Home from "../Home/Home";
import OurCoffee from "../OurCoffee/OurCoffee";
import ForYourPleasure from "../ForYourPleasure/ForYourPleasure";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/for-your-pleasure" element={<ForYourPleasure />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
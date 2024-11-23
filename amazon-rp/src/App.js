import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateProvider } from "./components/StateProvider"; // Import StateProvider
import  { initialState } from "./components/Reducer"; // Import reducer and initialState
import reducer from "./components/Reducer";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </StateProvider>
  );
}

export default App;

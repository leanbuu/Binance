import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultLayout from "./component/DefaultLayout";
import Login from "./pages/Login/Login";
import Binance from "./BinanceContext/Binance";
import { useState } from "react";


function App() {
  const [doi , setDoi] = useState('block')
  const handleDoi = () =>{
    setDoi(doi === 'block' ? 'none' : 'block')
  }
  const handleHome = () =>{
    setDoi('block')
  }
  return (
    
    <Router>
      <Binance.Provider
          value={{
            doi,
            handleDoi,
            handleHome,
          }}>
    <div className="App">
      <Routes>
        
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} /> 
       
      </Routes>
       
    </div>
    </Binance.Provider>
</Router>
);
}

export default App;
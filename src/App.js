import React, { createContext, useState } from "react";
import './App.css';
import Navbar from './component/nav'
import Hero from './component/hero'



export const ThemeContext = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "w-full bg-[#178e7e] text-white " : "w-full bg-[#ffffff] text-black"}>
        <Navbar/>
        <Hero/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

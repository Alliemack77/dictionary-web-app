import { createContext, useContext, useState } from "react";
import Dictionary from "./components/Dictionary";
import { WordContext } from "./context/context";

function App() {

  const {isDarkMode} = useContext(WordContext) 

  return (
    <main className={ isDarkMode ? 'dark' : 'light'}>
      <Dictionary/>
    </main>
  );
}

export default App;

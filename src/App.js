import axios from "axios";
import { useState } from "react";
import word from "./mock-data/mockEntry";
import Dictionary from "./components/Dictionary";

function App() {
  const [searchTerm, setSearchTerm] = useState(word)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const searchWord = (input) => {
    const options = {
      method: "GET", 
      url:  `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    }

    axios.request(options).then((response) => {
      setSearchTerm(response.data)
    }).catch((error) => alert("Oops try again"))
  }

  return (
    <main className={`${isDarkMode ? "dark" : "light"}`}>
      <Dictionary
        searchWord={searchWord}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        />
    </main>
  );
}

export default App;

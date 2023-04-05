import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Entry from "./components/Entry";
import axios from "axios";
import { useState } from "react";
import mockEntry from "./mock-data/mockEntry";

function App() {
  const [word, setWord] = useState(mockEntry)

  const searchWord = (input) => {
    const options = {
      method: "GET", 
      url:  `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    }

    axios.request(options).then((response) => {
      console.log(response.data)
      setWord(response.data)
    }).catch((error) => console.log(error))
  }

  

  return (
    <>
      {/* <Header /> */}
      <Searchbar searchWord={searchWord}/>
      <Entry word={word}/>
    </>
  );
}

export default App;

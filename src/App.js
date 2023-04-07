import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Entry from "./components/Entry";
import axios from "axios";
import { useState } from "react";
import word from "./mock-data/mockEntry";

function App() {
  const [searchTerm, setSearchTerm,] = useState(word)
  console.log(searchTerm)

  const searchWord = (input) => {
    const options = {
      method: "GET", 
      url:  `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    }

    axios.request(options).then((response) => {
      setSearchTerm(response.data)
    }).catch((error) => console.log(error))
  }

  

  return (
    <main>
      <section className='dictionary'>
        {/* <Header /> */}
        <Searchbar searchWord={searchWord}/>
        <Entry searchTerm={searchTerm}/>
      </section>
    </main>
  );
}

export default App;

import Dictionary from "./components/Dictionary";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
      <ThemeProvider>
        <Dictionary/>
      </ThemeProvider>
  );
}

export default App;

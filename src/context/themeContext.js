import { createContext, useState } from "react";

// create context
const ThemeContext = createContext()

// gather state, fetch data, and serve
const ThemeProvider = ({children}) => {
    // declaring state
    const [isDarkMode, setIsDarkMode] = useState(false)

    // serving data to children 
    return (
        <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}
import React, { useState } from "react"
import { LanguageContextProvider, ThemeContextProvider } from "."

const ContextProvider: React.FC = ({ children }) => {
  const [languageChoice, setLanguageChoice] = useState(
    typeof window !== "undefined"
      ? `${
          window.localStorage.getItem("langChoice") === null
            ? "en"
            : window.localStorage.getItem("langChoice")
        }`
      : ""
  )
  const [themeChoice, setThemeChoice] = useState(
    typeof window !== "undefined"
      ? `${
          window.localStorage.getItem("themeChoice") === null
            ? "auto"
            : window.localStorage.getItem("themeChoice")
        }`
      : ""
  )
  return (
    <ThemeContextProvider value={{ themeChoice, setThemeChoice }}>
      <LanguageContextProvider value={{ languageChoice, setLanguageChoice }}>
        {children}
      </LanguageContextProvider>
    </ThemeContextProvider>
  )
}

export default ContextProvider

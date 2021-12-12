import { createContext } from "react"

const LanguageContext = createContext<{
  languageChoice: string
  setLanguageChoice?: React.Dispatch<React.SetStateAction<string>>
}>({
  languageChoice: "",
})
const LanguageContextProvider = LanguageContext.Provider

const ThemeContext = createContext<{
  themeChoice: string
  setThemeChoice?: React.Dispatch<React.SetStateAction<string>>
}>({
  themeChoice: "",
})
const ThemeContextProvider = ThemeContext.Provider

export {
  LanguageContext,
  LanguageContextProvider,
  ThemeContextProvider,
  ThemeContext,
}

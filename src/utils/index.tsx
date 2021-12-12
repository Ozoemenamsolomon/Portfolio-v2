/**
 *
 * must be used within a window check
 * @param themeChoice string | null
 * @returns void
 *
 */
export const changeClassBasedOnThemeChoice = (themeChoice: string | null) => {
  const body = window.document.body
  switch (themeChoice) {
    case "auto" || null:
      body.classList.remove("lightmode")
      body.classList.remove("darkmode")
      break
    case "dark":
      body.classList.add("darkmode")
      body.classList.remove("lightmode")
      break
    case "light":
      body.classList.add("lightmode")
      body.classList.remove("darkmode")
      break
    default:
      return
  }
}

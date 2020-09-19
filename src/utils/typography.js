import Typography from "typography"
import "typeface-yekan"
import "typeface-vazir"
import "typeface-lalezarregular"

const typography = new Typography({
  overrideThemeStyles: () => ({
    body: {
      fontSize: "1.2rem",
    },
    a: {
      color: "rgb(117, 138, 106)",
    },
    ".-vazir": {
      fontFamily: ["Vazir", "sans-serif"].join(","),
    },
    ".-yekan": {
      fontFamily: ["Yekan", "sans-serif"].join(","),
    },
    ".-lalezar": {
      fontFamily: "Lalezar-Regular, sans-serif",
    },
    footer: {
      fontSize: "1rem",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography

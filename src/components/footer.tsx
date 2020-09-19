/** @jsx jsx */
import { jsx } from "theme-ui"
import HeaderExternalLinks from "./header-external-links"

const Footer = () => (
  <footer
    sx={{
      boxSizing: `border-box`,
      display: `flex`,
      justifyContent: `space-between`,
      mt: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`,
      },
      flexDirection: [`column`, `column`, `row`],
      variant: `dividers.top`,
    }}
  >
    <div>&copy; {new Date().getFullYear()} by IconBox.</div>
    <div>
      <HeaderExternalLinks />
    </div>
  </footer>
)

export default Footer

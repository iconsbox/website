/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

const HeaderTitle = ({ isDark }) => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <img
        src={isDark ? "./logoWhite.png" : "./logoBlack.png"}
        alt="Iconbox"
        sx={{ width: "68px", height: "64px", marginTop: "28px" }}
      />
    </Link>
  )
}

export default HeaderTitle

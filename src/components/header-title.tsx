/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: '3.2rem' }}>{siteTitle}</h1>
    </Link>
  )
}

export default HeaderTitle

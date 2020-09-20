/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import replaceSlashes from "../../utils/replaceSlashes"
import Listing from "../../components/listing"
import { PostsProps } from "../../types"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const BlogPosts = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <div className="nice-box">
      <h3 className="nice-title">Blog posts</h3>
      <Link
        sx={{
          position: "absolute",
          top: "-1rem",
          fontSize: "0.8rem",
          right: "0.8rem",
          background: "#fff",
          padding: "0.4rem",
          textDecoration: "none",
        }}
        to={replaceSlashes(`/${basePath}/${blogPath}`)}
      >
        Read all posts
      </Link>

      <div sx={{ padding: "0 1.6rem" }}>
        <Listing posts={posts} showTags={false} />
      </div>
    </div>
  )
}

export default BlogPosts

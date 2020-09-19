/** @jsx jsx */
import { useEffect } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { ArrowForwardOutlineIcon } from "@iconbox/eva"
import { useSetRecoilState } from "recoil"

import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import { headerShowState } from "../Recoil/atoms"
import { PostsProps } from "../types"
import Hero from "../pages/home/Hero"
import Packs from "../pages/home/Packs"
import Integrations from "../pages/home/Integrations"

const Homepage = ({ posts }: PostsProps) => {
  const setHeaderShow = useSetRecoilState(headerShowState)
  const { basePath, blogPath } = useMinimalBlogConfig()
  useScrollPosition(({ currPos }) => {
    if (currPos.y < -80) {
      setHeaderShow(1)
    } else {
      setHeaderShow(0)
    }
  })

  useEffect(() => {
    setHeaderShow(0)
  }, [])

  return (
    <Layout>
      <Hero />

      <div
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          position: "relative",
          bottom: "-3.4rem",
        }}
      >
        <Link
          to={replaceSlashes(`/${basePath}/app`)}
          sx={{
            display: "flex",
            padding: "0.5rem 1.6rem",
            fontSize: "1.2rem",
            fontWeight: 500,
            background: "rgb(108, 187, 71)",
            color: "#fff",
            borderRadius: "24px",
            textDecoration: "none",
            height: "3rem",
            zIndex: 9,
            ":hover svg": {
              transform: "translateX(0.7rem)",
            },
          }}
        >
          Start using{" "}
          <ArrowForwardOutlineIcon
            style={{
              transition: "transform ease-in-out 0.3s",
              width: "3rem",
              height: "2rem",
            }}
          />
        </Link>
      </div>

      <Packs />

      <Integrations />

      <Title text="Blog Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Title text="Donate" />
        You can donate us with bitcoin and this address:
        <div sx={{ color: "#B57BFF" }}>3BuDiSHazi66AADg6WDMj3DmbYwPvUijBK</div>
      </List>
    </Layout>
  )
}

export default Homepage

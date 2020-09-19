/** @jsx jsx */
import React from "react"
import { jsx, useColorMode } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { useRecoilValue } from "recoil"

import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import { headerShowState } from "../Recoil/atoms"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import HeaderTitle from "./header-title"

const Header = () => {
  const headerShow = useRecoilValue(headerShowState)
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header
      sx={{
        background: headerShow ? (isDark ? "#1b202c" : "#fff") : "transparent",
        position: "fixed",
        width: "100%",
        alignItems: "center",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "center",
        top: 0,
        right: 0,
        zIndex: 999,
        boxShadow: headerShow
          ? `0 5px 33px -11px ${isDark ? "#070a0e" : "rgba(0, 0, 0, 0.15)"}`
          : "none",
        transition: "box-shadow ease-in-out 0.3s",
      }}
    >
      <Flex
        sx={{
          alignItems: `center`,
          height: "4rem",
          width: "100%",
          justifyContent: `space-between`,
          maxWidth: "1024px",
          padding: "2rem",
        }}
      >
        <HeaderTitle />
        {headerShow ? <Navigation nav={nav} /> : null}

        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
    </header>
  )
}

export default Header

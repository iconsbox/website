/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { Box, Container, jsx } from "theme-ui"
import "typeface-inter"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={() => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
          overflowX: "hidden",
          maxWidth: "100%",
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: "#F46B3F",
          color: "#fff",
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
        h2: {
          fontWeight: "700 !important",
        },
        ".packs": {
          position: "relative",
          border: "1px solid rgba(150, 150, 150, 0.3)",
          borderRadius: "0.8rem",
          textDecoration: "none",
          color: "currentColor",
          width: "88%",
          display: "flex",
          flexDirection: "column",
          margin: "2rem 6%",
          "&:before": {
            content: `""`,
            position: "absolute",
            background: "currentColor",
            height: "83%",
            width: "6%",
            right: 0,
            display: "block",
            borderRadius: "0 1rem 1rem 0",
            transform: "translateX(100%)",
            margin: "3% 0",
            opacity: "0.05",
          },
          "&:after": {
            content: `""`,
            position: "absolute",
            background: "currentColor",
            height: "83%",
            width: "6%",
            left: 0,
            display: "block",
            borderRadius: "1rem 0 0 1rem",
            transform: "translateX(-100%)",
            margin: "3% 0",
            opacity: "0.05",
          },
          ".content": {
            height: "22rem",
            width: "100%",
            display: "flex",
            padding: "3rem 0.7rem 0.4rem 0.7rem",
            flexWrap: "wrap",
            justifyContent: "space-around",
            "&:hover div": {
              opacity: 0.3,
            },
            div: {
              width: "6rem !important",
              height: "5.5rem !important",
              transition: "opacity ease-in-out 0.3s",
              willChange: "filter, opacity",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              "&:hover": {
                opacity: 1,
              },
              "&:hover svg": {
                transform: "scale(1.2)",
              },
              svg: {
                width: "2.4rem !important",
                height: "2.4rem !important",
                willChange: "transform",
                transition: "transform ease-in-out 0.3s",
              },
            },
          },
          ".footer": {
            height: "3rem",
            listStyleType: "none",
            margin: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 0.8rem",
            fontSize: "1rem",
            li: {
              margin: "0 0.5rem -3px 0.5rem",
              fontSize: "0.8rem",
              opacity: 0.4,
              fontWeight: 500,
              cursor: "pointer",
            },
            "li.active": {
              position: "relative",
              color: "#B57BFF",
              opacity: 1,
              fontWeight: 800,
              transform: "scale(1.1)",
            },
            "li.whole": {
              fontWeight: 700,
              margin: "0 0.5rem 0 0",
              fontSize: "1rem",
              opacity: 1,
            },
            "li.active:before": {
              content: `""`,
              width: "0",
              height: "0",
              position: "absolute",
              top: "-0.6rem",
              left: "50%",
              transform: "translate(-50%, -15px)",
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "8px solid #B57BFF",
            },
          },
        },
        ".packs .content:before": {
          content: `""`,
          color: `black`,
          display: "block",
          width: "8px",
          height: "8px",
          borderRadius: "40px",
          position: "absolute",
          top: "22px",
          left: "22px",
          background: "#ff5f56",
          boxShadow: "16px 0px 0px #ffbd2e, 32px 0px 0px #27c93f",
        },
        ".integrations": {
          marginTop: "-2rem !important",
          ".icons-holder": {
            alignItems: `center`,
            justifyContent: `space-between`,
            flexFlow: `wrap`,
            div: {
              background: "#fff",
              boxShadow: "0 4px 22px -11px rgba(0,0,0,0.2)",
              transition: "transform ease-in-out 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "6rem",
              flex: "0 0 calc(33.33% - 0.5rem)",
              borderRadius: "1.6rem",
              margin: "0.4rem 0",
              color: "#333",
              userSelect: "none",
              "&:hover": {
                transform: "scale(0.95)",
              },
              svg: {
                width: "2.5rem !important",
                height: "2.5rem !important",
              },
            },
          },
        },
        ".nice-box": {
          marginTop: "8rem",
          border: "1px solid rgba(0,0,0, 0.13)",
          borderRadius: "0.8rem",
          display: "block",
          position: "relative",
        },
        ".nice-title": {
          position: "relative",
          top: "-1rem",
          left: "1rem",
          fontSize: "2rem",
          paddingRight: "1rem",
          "&:before": {
            content: `""`,
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            background: "rgba(126, 226, 79, 0.52)",
            position: "absolute",
            left: "-1.6rem",
            top: "0",
            zIndex: "-1",
          },
        },
        ".emoji-box": {
          boxShadow: "0 6px 22px -11px rgba(0,0,0,0.2)",
          display: "flex !important",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1rem",
          margin: "1rem 0 0.4rem 0 !important",
          color: "currentColor",
          userSelect: "none",
          flexDirection: "column !important",
          position: "relative",
          height: "125px",
          span: {
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 6px 22px -11px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "-2rem",
            height: "60px",
            width: "60px",
            fontSize: "1.8rem",
          },
          div: {
            fontSize: "1rem",
            marginTop: "2.2rem",
            maxWidth: "70%",
            lineHeight: "17px",
          },
          small: {
            fontSize: "0.6rem",
            fontWeight: "500",
            marginTop: "0.8rem",
          },
        },
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </React.Fragment>
)

export default Layout

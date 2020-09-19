/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { GlassesOutlineIcon } from "@iconbox/ion"
import { CloudIcon, MessageCircleIcon } from "@iconbox/feather"
import { PlusSolidIcon } from "@iconbox/fa5"

const Hero = () => {
  return (
    <React.Fragment>
      <GlassesOutlineIcon
        sx={{
          position: "absolute",
          width: "40rem !important",
          height: "40rem !important",
          right: "-12rem",
          top: "-8rem",
          opacity: "0.07",
        }}
      />
      <CloudIcon
        sx={{
          position: "absolute",
          width: "20rem !important",
          height: "20rem !important",
          left: "-3rem",
          top: "2rem",
          opacity: "0.07",
        }}
      />
      <PlusSolidIcon
        sx={{
          position: "absolute",
          width: "10rem !important",
          height: "10rem !important",
          left: "-6rem",
          top: "32rem",
          opacity: "0.07",
          transform: "rotate(55deg)",
        }}
      />
      <MessageCircleIcon
        sx={{
          position: "absolute",
          width: "9rem !important",
          height: "9rem !important",
          right: "-4rem",
          top: "26rem",
          opacity: "0.05",
        }}
      />
      <section
        sx={{
          boxSizing: `border-box`,
          display: `block`,
          justifyContent: `space-between`,
          mt: [6],
          lineHeight: "4rem",
          color: ``,
          a: {
            variant: `links.secondary`,
          },
          flexDirection: [`column`, `column`, `row`],
          fontSize: 44,
          fontWeight: 700,
          width: "70%",
          h1: {
            m: 0,
          },
        }}
      >
        In{" "}
        <h1
          sx={{
            fontSize: 44,
            display: "inline-block",
            fontWeight: 800,
            color: "#6CBB47",
          }}
        >
          <span sx={{ color: "#B57BFF" }}>Icon</span>Box
        </h1>{" "}
        we have a world of famous icons 🎉, with over{" "}
        <span sx={{ fontWeight: 900, color: "#B57BFF" }}>21,000</span> free
        icons 🚀
      </section>
    </React.Fragment>
  )
}

export default Hero

/** @jsx jsx */
import React from "react"
import { jsx, Grid, Box, Flex } from "theme-ui"

import { BrandSketchIcon, BrandReactIcon, BrandGithubIcon } from "@iconbox/fa5"
import { LogoNpmIcon, LogoAngularIcon } from "@iconbox/ion"

import { Link } from "gatsby"
import FigmaIcon from "./icons/Figma"
import IconJar from "./icons/IconJar"
import XDIcon from "./icons/XD"
import PSDIcon from "./icons/PSD"
import IllustratorIcon from "./icons/Illustrator"
import Svelte from "./icons/Svelte"
import Vue from "./icons/Vue"
import Layout from "../../components/layout"

const Integrations = () => (
  <>
    <Grid sx={{ mt: "10rem" }} gap={2} columns={[1, null, 3]}>
      <Box>
        <h3 sx={{ mb: "7rem", fontSize: "2.8rem" }}>
          IconBox is available in:
        </h3>
        Everyone is convenient with a tool, we respect your choice.
      </Box>

      <Box className="integrations">
        <Flex className="icons-holder">
          <div>
            <FigmaIcon />
          </div>
          <div>
            <BrandSketchIcon fill="#fc9b02" />
          </div>
          <div>
            <IconJar />
          </div>

          <div>
            <BrandReactIcon
              fill="#55d5f7"
              stroke="#55d5f7"
              strokeWidth="0.6rem"
            />
          </div>
          <div>
            <Vue />
          </div>
          <div>
            <LogoAngularIcon fill="#d60030" />
          </div>

          <div>SVG</div>
          <div>PNG</div>
          <div>XML</div>
        </Flex>
      </Box>
      <Box className="integrations">
        <Flex className="icons-holder">
          <div>
            <XDIcon />
          </div>
          <div>
            <IllustratorIcon />
          </div>
          <div>
            <PSDIcon />
          </div>

          <div>
            <Svelte />
          </div>
          <div>
            <BrandGithubIcon />
          </div>
          <div>
            <LogoNpmIcon />
          </div>

          <div>Font</div>
          <div>XML</div>
          <div>JSON</div>
        </Flex>
      </Box>
    </Grid>

    <div
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Link
        to="https://app.iconbox.space"
        target="_blank"
        sx={{
          display: "flex",
          padding: "0.5rem 1.6rem",
          fontSize: "1.2rem",
          fontWeight: 500,
          background: "#fff",
          color: "rgb(108 187 71)",
          borderRadius: "12px",
          textDecoration: "none",
          height: "3rem",
          marginTop: "120px",
          boxShadow: "0 12px 47px -14px rgb(108 187 71)",
          zIndex: 9,
          textTransform: "uppercase",
          letterSpacing: 1,
          fontWeight: 300,
          ":hover svg": {
            transform: "translateX(0.7rem)",
          },
        }}
      >
        Start using app
      </Link>
    </div>
  </>
)

export default Integrations

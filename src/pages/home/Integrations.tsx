/** @jsx jsx */
import React from "react"
import { jsx, Grid, Box, Flex } from "theme-ui"

import { BrandSketchIcon, BrandReactIcon } from "@iconbox/fa5"
import { LogoNpmIcon, LogoAngularIcon } from "@iconbox/ion"
import { BrandGithubIcon } from "@iconbox/fa5"
import FigmaIcon from "./icons/Figma"
import IconJar from "./icons/IconJar"
import XDIcon from "./icons/XD"
import PSDIcon from "./icons/PSD"
import IllustratorIcon from "./icons/Illustrator"
import Svelte from "./icons/Svelte"
import Vue from "./icons/Vue"

const Integrations = () => {
  return (
    <Grid sx={{ mt: "10rem" }} gap={2} columns={[1, null, 3]}>
      <Box>
        <h3 sx={{ mb: "7rem", fontSize: "2.8rem" }}>
          IconBox is available in:
        </h3>
        Everyone is convenient with a tool, we respect your choice.
      </Box>

      <Box className="integrations" >
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
  )
}

export default Integrations

import React from "react"
import { RecoilRoot } from "recoil"

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <RecoilRoot>{element}</RecoilRoot>
)

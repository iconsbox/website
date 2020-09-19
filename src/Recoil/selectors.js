import { selector } from "recoil"
import { headerShowState } from "./atoms"

export const getHeaderStyleState = selector({
  key: "headerShowState",
  get: ({ get }) => get(headerShowState),
})

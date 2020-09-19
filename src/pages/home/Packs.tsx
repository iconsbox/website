/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { GlassesOutlineIcon } from "@iconbox/ion"
import { CloudIcon, MessageCircleIcon } from "@iconbox/feather"
import { PlusSolidIcon } from "@iconbox/fa5"

const Packs = () => {
  return (
    <React.Fragment>
      <div className="packs">
        <div className="content">
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <PlusSolidIcon />
          </div>
          <div>
            <MessageCircleIcon />
          </div>
          <div>
            <CloudIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
          <div>
            <GlassesOutlineIcon />
          </div>
        </div>
        <ul className="footer">
          <li className="whole">Packs: </li>
          <li>FontAwesome4</li>
          <li className="active">Feather</li>
          <li>Iconly</li>
          <li>IonIcons</li>
        </ul>
      </div>
      <div
        sx={{ fontSize: "0.8rem", textAlign: "center", marginTop: "-0.8rem" }}
      >
        With more than 22 open source icon packs.
      </div>
    </React.Fragment>
  )
}

export default Packs

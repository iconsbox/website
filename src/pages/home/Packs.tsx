/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import {
  ImagePicture2Icon,
  CloudConnectionIcon,
  DirectoryArrowDownIcon,
  CoffeeIcon,
  CenterObjectIcon,
  Drink2Icon,
  CartDownRoundIcon,
  DirectoryMissing3Icon,
  EmojiSadCircle5Icon,
  CloudsIcon,
  Desktop3Icon,
  EmojiSad32Icon,
  EmojiNeutralSquareGlasses4Icon,
  Bookmark6Icon,
  DirectoryFavoriteIcon,
  ClickTouchPress2Icon,
  Camera3Icon,
  FilePsd2Icon,
  Cup3Icon,
  CloudPlus2Icon,
  File3Icon,
  Bookmark7Icon,
  FileMissingMinusIcon,
  Done2Icon,
} from "@iconbox/alexandra"

const Packs = () => {
  return (
    <React.Fragment>
      <div className="packs">
        <div className="content">
          <div>
            <ImagePicture2Icon />
          </div>
          <div>
            <CloudConnectionIcon />
          </div>
          <div>
            <DirectoryArrowDownIcon />
          </div>
          <div>
            <CoffeeIcon />
          </div>
          <div>
            <CenterObjectIcon />
          </div>
          <div>
            <Drink2Icon />
          </div>
          <div>
            <CartDownRoundIcon />
          </div>
          <div>
            <DirectoryMissing3Icon />
          </div>
          <div>
            <EmojiSadCircle5Icon />
          </div>
          <div>
            <CloudsIcon />
          </div>
          <div>
            <Desktop3Icon />
          </div>
          <div>
            <EmojiSad32Icon />
          </div>
          <div>
            <EmojiNeutralSquareGlasses4Icon />
          </div>
          <div>
            <Bookmark6Icon />
          </div>
          <div>
            <DirectoryFavoriteIcon />
          </div>
          <div>
            <ClickTouchPress2Icon />
          </div>
          <div>
            <Camera3Icon />
          </div>
          <div>
            <FilePsd2Icon />
          </div>
          <div>
            <Cup3Icon />
          </div>
          <div>
            <CloudPlus2Icon />
          </div>
          <div>
            <File3Icon />
          </div>
          <div>
            <Bookmark7Icon />
          </div>
          <div>
            <FileMissingMinusIcon />
          </div>
          <div>
            <Done2Icon />
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

import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import icon from "../../../images/icon.png"

const Header = () => {
  return (
    <>
    <h1>hi</h1>
    <p>Using static image</p>
    <StaticImage src="../../../images/icon.png"></StaticImage>
    <p>Using `img`</p>
    <img src={icon} alt="#" />
    <p>End of header</p>
    <hr/>
    </>
  )
}

export default Header;
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import { Header } from "."

const Layout = () => {
  return (
    <>
    <Header/>
    <StaticImage src="../../images/icon.png"></StaticImage>
    </>
  )
}

export default Layout;
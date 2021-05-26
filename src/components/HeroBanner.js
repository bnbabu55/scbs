import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const HeroBanner = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(
        name: { regex: "/home-banner/" }
        relativeDirectory: { eq: "images" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const pluginImage = getImage(bannerImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...image}
      preserveStackingContext
      id="HomeBanner"
      className="w-full mx-auto text-gray-800 font-LatoBlack flex flex-col justify-center items-center"
    >
      <div className="w-10/12 mx-auto text-center my-24 lg:my-48">
        <div className="font-LatoBlack font-black text-lg lg:text-5xl text-center text-white pb-12">
          Our mission is to provide large company support to smaller
          organizations—at a fraction of the cost.
        </div>
        <Link
          to="/services"
          className="px-5 py-3 bg-themeBlue-600 font-semibold text-white tracking-wide uppercase text-base rounded-full hover:bg-themeBlue-200 transition delay-150 duration-300 ease-in-out"
        >
          Detail
        </Link>
      </div>
    </BackgroundImage>
  )
}

export default HeroBanner

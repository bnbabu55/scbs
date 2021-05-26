import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const HomeContact = () => {
  const { contactImage } = useStaticQuery(graphql`
    {
      contactImage: file(
        name: { regex: "/home-questions-section/" }
        relativeDirectory: { eq: "images" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const pluginImage = getImage(contactImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...image}
      preserveStackingContext
      id="HomeContact"
      className="w-full mx-auto text-gray-800 font-LatoBlack py-20 flex flex-col justify-center items-center"
    >
      <div className="w-10/12 flex flex-col items-start my-20">
        <div className="w-3/4 lg:w-3/5 text-left text-white bg-gray-500 bg-opacity-50 pt-12 pb-8 px-5 rounded-lg">
          <h3 className="font-semibold text-2xl lg:text-5xl mb-10 tracking-tight">
            Do you have any questions?
          </h3>
          <p className="text-base lg:text-2xl font-semibold">
            In most cases, Scenic City Business Solutions’ partners gain access
            to an experienced team of professionals for less than the cost of
            one in-house employee.
          </p>
        </div>
        <Link
          to="/about"
          className="px-5 py-3 mt-5 border border-gray-400 font-bold tracking-wide uppercase text-base rounded-full bg-themeBlue-600 text-white hover:text-themeBlue-600 hover:bg-white hover:border-0 transition delay-150 duration-300 ease-in-out"
        >
          Get a Free Consultation
        </Link>
      </div>
    </BackgroundImage>
  )
}

export default HomeContact

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const HomeAbout = () => {
  const { aboutImage } = useStaticQuery(graphql`
    {
      aboutImage: file(
        name: { regex: "/home-abouts/" }
        relativeDirectory: { eq: "images" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(
            width: 570
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <section
      id="HomeAbout"
      className="w-11/12 mx-auto text-gray-800 font-LatoBlack py-20 flex flex-col lg:flex-row lg:justify-center lg:items-center"
    >
      <GatsbyImage
        image={aboutImage?.childImageSharp?.gatsbyImageData}
        alt="About us image"
        className="flex-1"
      />
      <div className="w-10/12 mx-auto text-left flex-1 border-4 border-gray-400 pt-12 pb-5 pl-5 lg:pl-32 pr-20 lg:-ml-16 z-10 mt-5 lg:mt-0">
        <h3 className="font-bold text-4xl uppercase">About Us</h3>
        <p className="my-5 text-sm font-Roboto">
          For nearly 50 years, Scenic City Business Solutions has delivered
          superior back-office support services to companies across the
          Southeast. We recognize a need for a total business solution that
          allows owners of small-to-midsize organizations to focus on what they
          do best: running their organization.
        </p>
        <Link
          to="/about"
          className="px-5 py-3 border border-gray-400 font-bold tracking-wide uppercase text-base rounded-full hover:bg-themeBlue-600 hover:text-white transition delay-150 duration-300 ease-in-out"
        >
          Detail
        </Link>
      </div>
    </section>
  )
}

export default HomeAbout

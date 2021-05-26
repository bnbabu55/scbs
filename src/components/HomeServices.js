import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const HomeServices = () => {
  const { serviceImage } = useStaticQuery(graphql`
    {
      serviceImage: file(
        name: { regex: "/home-services/" }
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

  const pluginImage = getImage(serviceImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...image}
      preserveStackingContext
      id="HomeServices"
      className="w-full mx-auto text-gray-800 font-LatoBlack py-20 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl text-white font-black text-center uppercase pb-10">
        Our Services
      </h2>
      <div className="w-11/12 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-72 mx-auto text-center my-5 lg:my-0 text-white bg-gray-500 pt-12 pb-8">
          <h3 className="font-bold text-2xl px-8">
            Accounting/
            <br />
            Bookkeeping
          </h3>
          <hr className="border-b border-t-0 border-gray-300 my-5" />
          <ul className="text-sm text-left list-inside my-10 leading-8 px-8">
            <li>
              <span className="mr-4">&gt;</span> A/P and A/R
            </li>
            <li>
              <span className="mr-4">&gt;</span> GL Maintenance
            </li>
            <li>
              <span className="mr-4">&gt;</span> Monthly Financial Statements
            </li>
            <li className="mb-10">
              <span className="mr-4">&gt;</span> Indirect Taxes
            </li>
          </ul>
          <hr className="border-b border-t-0 border-gray-300 mt-5 mb-7" />
          <Link
            to="/accounting-outsourcing-services/"
            className="px-5 py-3 mt-2 border border-gray-400 font-bold tracking-wide uppercase text-base rounded-full hover:bg-themeBlue-600 hover:text-white hover:border-0 transition delay-150 duration-300 ease-in-out"
          >
            Detail
          </Link>
        </div>
        <div className="w-72 mx-auto text-center my-5 lg:my-0 bg-white text-gray-500 pt-12 pb-8">
          <h3 className="font-bold text-2xl px-8">
            Human
            <br />
            Resources
          </h3>
          <hr className="border-b border-t-0 border-gray-300 my-5" />
          <ul className="text-sm text-left list-inside my-10 leading-8 px-8">
            <li>
              <span className="mr-4">&gt;</span> Payroll Processing
            </li>
            <li>
              <span className="mr-4">&gt;</span> Payroll Taxes
            </li>
            <li>
              <span className="mr-4">&gt;</span> Benefits Management
            </li>
            <li className="mb-10">
              <span className="mr-4">&gt;</span> Insurance Audits
            </li>
          </ul>
          <hr className="border-b border-t-0 border-gray-300 mt-5 mb-7" />
          <Link
            to="/human-resources-outsourcing-services/"
            className="px-5 py-3 mt-2 border border-gray-400 font-bold tracking-wide uppercase text-base rounded-full hover:bg-themeBlue-600 hover:text-white hover:border-0 transition delay-150 duration-300 ease-in-out"
          >
            Detail
          </Link>
        </div>
        <div className="w-72 mx-auto text-center my-5 lg:my-0 text-white bg-gray-500 pt-12 pb-8">
          <h3 className="font-bold text-2xl px-8">
            Information
            <br />
            Technology
          </h3>
          <hr className="border-b border-t-0 border-gray-300 my-5" />
          <ul className="text-sm text-left list-inside my-10 leading-8 px-8">
            <li>
              <span className="mr-4">&gt;</span> PC & Laptop Setup/Repair
            </li>
            <li>
              <span className="mr-4">&gt;</span> Network Setup/Maintenance
            </li>
            <li>
              <span className="mr-4">&gt;</span> IT Help Desk
            </li>
            <li className="mb-10">
              <span className="mr-4">&gt;</span> Backup/Disaster Recovery
            </li>
          </ul>
          <hr className="border-b border-t-0 border-gray-300 mt-5 mb-7" />
          <Link
            to="/it-outsourcing-service-providers/"
            className="px-5 py-3 mt-2 border border-gray-400 font-bold tracking-wide uppercase text-base rounded-full hover:bg-themeBlue-600 hover:text-white hover:border-0 transition delay-150 duration-300 ease-in-out"
          >
            Detail
          </Link>
        </div>
        <div className="w-72 mx-auto text-center my-5 lg:my-0 bg-white text-gray-500 pt-12 pb-8">
          <h3 className="font-bold text-2xl px-8">
            Advisement
            <br />
            Services
          </h3>
          <hr className="border-b border-t-0 border-gray-300 my-5" />
          <ul className="text-sm text-left list-inside my-10 leading-8 px-8">
            <li>
              <span className="mr-4">&gt;</span> CFO Level Financial Advice
            </li>
            <li>
              <span className="mr-4">&gt;</span> Financial Statement Analysis
            </li>
            <li>
              <span className="mr-4">&gt;</span> Risk Assessment/Management
            </li>
            <li className="mb-10">
              <span className="mr-4">&gt;</span> Strategic Planning
            </li>
          </ul>
          <hr className="border-b border-t-0 border-gray-300 mt-5 mb-7" />
          <Link
            to="/advisement-strategic-outsourcing-services/"
            className="px-5 py-3 mt-2 border border-gray-400 font-bold tracking-wide uppercase text-base rounded-full hover:bg-themeBlue-600 hover:text-white hover:border-0 transition delay-150 duration-300 ease-in-out"
          >
            Detail
          </Link>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default HomeServices

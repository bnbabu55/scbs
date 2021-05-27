import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {
  const { logo, gmb } = useStaticQuery(graphql`
    {
      logo: file(
        name: { regex: "/scbs-logo/" }
        relativeDirectory: { eq: "images" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      gmb: file(name: { regex: "/GMB/" }, relativeDirectory: { eq: "images" }) {
        name
        childImageSharp {
          gatsbyImageData(
            width: 54
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const [isMenuVisible, setMenuVisibility] = useState(false)

  return (
    <header className="w-full mt-0 pt-0 text-gray-800 font-LatoBlack">
      <div className="flex justify-between w-11/12 mx-auto text-sm py-3 border-b border-b-gray-300">
        <div className="">
          <span
            className="pr-3"
            style={{
              color: "transparent",
              textShadow: "0 0 0 rgb(51, 51, 51)",
            }}
            role="img"
            aria-label="Telephone icon"
          >
            &#128222;
          </span>
          Call: 423.777.4822
        </div>
        <div className="flex items-center">
          <a
            href="https://www.facebook.com/Scenic-City-Business-Solutions-1259924707441490"
            target="_blank"
            rel="noreferrer"
            className="mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 408.788 408.788"
              className="text-facebookBlue text-5xl"
              role="img"
              aria-label="Facebook Icon"
            >
              <path
                d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 01-8.954-8.92l-.182-47.087a8.955 8.955 0 018.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 018.955 8.955v39.704a8.955 8.955 0 01-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 01-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
                fill="#4267B2"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/ScenicCityBiz"
            target="_blank"
            rel="noreferrer"
            className="mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              className="fil-current text-twitterBlue text-5xl"
              role="img"
              aria-label="Twitter Icon"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                fill="#1DA1F2"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/river-city-business"
            target="_blank"
            rel="noreferrer"
            className="mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 382 382"
              className="text-linkedInBlue text-5xl"
              role="img"
              aria-label="LinkedIn Icon"
            >
              <path
                d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
                fill="#0072b1"
              />
            </svg>
          </a>
          <a
            href="https://business.google.com/dashboard/l/17748928544678305045"
            target="_blank"
            rel="noreferrer"
          >
            <GatsbyImage
              image={gmb.childImageSharp.gatsbyImageData}
              alt="Google My Business Logo"
            />
          </a>
        </div>
      </div>
      <div className="w-11/12 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex px-4 py-3 items-center justify-between md:p-0">
          <Link to="/">
            <GatsbyImage
              image={logo.childImageSharp.gatsbyImageData}
              alt="SBCS Logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setMenuVisibility(!isMenuVisible)}
              className="text-gray-800 hover:text-gray-400 focus:text-gray-400 focus:outline-none"
              aria-label="mobile menu button"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Hamburger Menu Icon"
              >
                <path
                  className={isMenuVisible ? "block" : "hidden"}
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />

                <path
                  className={isMenuVisible ? "hidden" : "block"}
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={`px-2 pb-2 ${
            isMenuVisible ? "block" : "hidden"
          } md:flex md:p-0 md:justify-center md:items-center `}
        >
          <li className="md:py-8">
            <Link
              to="/"
              className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded"
              activeClassName="bg-themeBlue-600 text-white"
            >
              Home
            </Link>
          </li>
          <li className="md:py-8">
            <Link
              to="/about"
              className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded"
              activeClassName="bg-themeBlue-600 text-white"
            >
              About Us
            </Link>
          </li>
          <li className="md:py-8 md:mt-1 group realtive">
            <Link
              to="/services"
              className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded flex items-center"
              activeClassName="bg-themeBlue-600 text-white"
            >
              Services{"  "}
              &#9660;
            </Link>
            <div className="-mx-3 pb-2 bg-white rounded w-76 absolute z-10 mt-8 hidden group-hover:flex flex-col">
              <Link
                to="/accounting-outsourcing-services"
                className="px-2 mx-2 py-1 my-1 uppercase rounded font-Lato font-black text-xs"
                activeClassName="bg-themeBlue-600 text-white"
              >
                Accounting Bookkeeping
              </Link>
              <Link
                to="/human-resources-outsourcing-services"
                className="px-2 mx-2 py-1 my-1 uppercase rounded font-LatoBold font-black text-xs"
                activeClassName="bg-themeBlue-600 text-white"
              >
                Human Resources
              </Link>
              <Link
                to="/it-outsourcing-service-providers"
                className="px-2 mx-2 py-1 my-1 uppercase rounded font-LatoBold font-black text-xs"
                activeClassName="bg-themeBlue-600 text-white"
              >
                Information Technology
              </Link>
              <Link
                to="/advisement-strategic-outsourcing-services"
                className="px-2 mx-2 py-1 my-1 uppercase rounded font-LatoBold font-black text-xs"
                activeClassName="bg-themeBlue-600 text-white"
              >
                Advisement Services
              </Link>
            </div>
          </li>
          <li className="md:py-8">
            <Link
              to="/contacts"
              className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded"
              activeClassName="bg-themeBlue-600 text-white"
            >
              Contact
            </Link>
          </li>
          <li className="md:py-8">
            <span className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded">
              Search
            </span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

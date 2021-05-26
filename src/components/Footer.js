import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Footer = () => {
  const { footerLogo, footerBlogs, gmb } = useStaticQuery(graphql`
    {
      footerLogo: file(
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
      footerBlogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blogs/" } }
        sort: { fields: fileAbsolutePath, order: ASC }
        limit: 2
      ) {
        nodes {
          id
          excerpt(pruneLength: 50)
          frontmatter {
            altTxt
            title
            author
            category
            date(formatString: "MMMM DD, yyyy")
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 60
                  height: 60
                  layout: FIXED
                  quality: 90
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      gmb: file(name: { regex: "/GMB/" }, relativeDirectory: { eq: "images" }) {
        name
        childImageSharp {
          gatsbyImageData(
            width: 18
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <footer className="w-full pt-20">
      <div className="w-11/12 font-Roboto mx-auto md:flex md:justify-between md:items-start md:gap-x-5 mb-10">
        <div className="flex-1 flex flex-col">
          <Link
            to="/about"
            className="text-lg uppercase py-3 lg:pb-3 lg:pt-0 hover:underline"
          >
            ABOUT
          </Link>
          <p className="text-sm">
            Scenic City Business Solutions specializes in providing accounting,
            human resources, information technology, and CFO level advisement.
            Our goal is to level the playing field and give you the same level
            of support that large companies enjoy at a fraction of the cost. We
            recognize the need for a total business solution for small and
            midsized companies that allows business owners to focus on what they
            do best, leaving everything else up to us.
          </p>
        </div>
        <div className="flex-1 flex flex-col">
          <Link
            to="/services"
            className="text-lg uppercase py-3 lg:pb-3 lg:pt-0 hover:underline"
          >
            Services
          </Link>
          <Link
            to="/accounting-outsourcing-services"
            className="font-Lato text-sm pb-5"
          >
            <span className="mr-4">&gt;</span> Outsource Financial Services
          </Link>
          <Link
            to="/human-resources-outsourcing-services"
            className="font-Lato text-sm pb-5"
          >
            <span className="mr-4">&gt;</span> Human Resources Outsourcing
            Services
          </Link>
          <Link
            to="/it-outsourcing-service-providers"
            className="font-Lato text-sm pb-5"
          >
            <span className="mr-4">&gt;</span> IT Outsourcing Service Providers
          </Link>
          <Link
            to="/advisement-strategic-outsourcing-services"
            className="font-Lato text-sm pb-5"
          >
            <span className="mr-4">&gt;</span> Strategic Outsourcing Services
          </Link>
        </div>
        <div className="flex-1 flex flex-col">
          <Link
            to="/blog"
            className="text-lg uppercase py-3 lg:pb-3 lg:pt-0 hover:underline"
          >
            Recent posts
          </Link>
          {footerBlogs.nodes.map(post => {
            return (
              <div
                key={post.id}
                className="mx-auto text-center flex gap-x-4 items-start pb-3"
              >
                <div className="flex flex-col items-start">
                  <GatsbyImage
                    image={
                      post.frontmatter.featuredImage.childImageSharp
                        .gatsbyImageData
                    }
                    alt={post.frontmatter.altTxt}
                    width={60}
                  />
                </div>
                <div className="flex flex-col text-left -mt-1">
                  <div className="text-sm">{post.frontmatter.date}</div>
                  <Link
                    to={post.frontmatter.slug}
                    className="pb-3 text-sm hover:text-themeBlue-600 transition delay-150 duration-300 ease-in-out"
                  >
                    {post.frontmatter.title}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex-1 flex flex-col">
          <Link
            to="/contacts"
            className="text-lg uppercase py-3 lg:pb-3 lg:pt-0 hover:underline"
          >
            Contacts
          </Link>
          <div className="text-sm pb-3">
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
          <div className="text-sm pb-3">1724 Central Avenue,</div>
          <div className="text-sm">Chattanooga, TN 37408</div>
        </div>
      </div>
      <div className="w-11/12 mx-auto md:flex md:justify-between md:items-center">
        <Link to="/">
          <GatsbyImage
            image={footerLogo.childImageSharp.gatsbyImageData}
            alt="SBCS Logo"
          />
        </Link>
        <ul className="px-2 pb-2 lg:flex lg:p-0 lg:leading-4 lg:items-center">
          <li className="lg:py-8">
            <Link
              to="/"
              className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded hover:bg-themeBlue-600 hover:text-white"
            >
              Home
            </Link>
          </li>
          <li className="lg:py-8">
            <Link
              to="/about"
              className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded hover:bg-themeBlue-600 hover:text-white"
            >
              About Us
            </Link>
          </li>
          <li className="lg:py-8">
            <Link
              to="/services"
              className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded hover:bg-themeBlue-600 hover:text-white"
            >
              Services
            </Link>
          </li>
          <li className="lg:py-8">
            <Link
              to="/contacts"
              className="px-2 py-1 uppercase font-LatoBlack font-black text-xs tracking-wide rounded hover:bg-themeBlue-600 hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full mx-auto">
        <hr className="text-white border-1" />
      </div>
      <div className="w-11/12 mx-auto footer-copyright m-auto py-3 font-Lato text-xs flex flex-col lg:flex-row lg:justify-between">
        <div>
          <div className="copyright-smr">
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              to="/"
              className="font-Lato text-xs hover:text-themeOrange-400"
            >
              Scenic City Business Solutions -{" "}
            </Link>
            <span> All Rights Reserved.{"  "}</span>
            <Link
              to="/privacy-policy"
              className="font-Lato text-xs text-themeBlue-600 hover:text-themeOrange-400"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="copyright-smr pt-2">
            Developed by{" "}
            <a
              href="https://www.searchmarketingresource.com/"
              className="font-Lato text-xs hover:text-themeOrange-400"
            >
              Search Marketing Resource LLC
            </a>
            .
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.facebook.com/Scenic-City-Business-Solutions-1259924707441490"
            target="_blank"
            rel="noreferrer"
            className="pr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
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
            className="pr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
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
            className="pr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
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
    </footer>
  )
}

export default Footer

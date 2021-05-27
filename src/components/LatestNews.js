import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const LatestNews = () => {
  const { blogs } = useStaticQuery(graphql`
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blogs/" } }
        sort: { fields: fileAbsolutePath, order: ASC }
        limit: 2
      ) {
        nodes {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            altTxt
            title
            author
            category
            month: date(formatString: "MMMM")
            day: date(formatString: "DD")
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 10
                  layout: CONSTRAINED
                  quality: 90
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section
      id="LatestNews"
      className="w-full mx-auto text-gray-800 font-LatoBlack py-20 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-black text-center uppercase pb-10">
        Latest News
      </h2>
      <div className="w-11/12 flex flex-col lg:flex-row lg:gap-x-5 justify-center items-start">
        {blogs.nodes.map(post => {
          return (
            <div
              key={post.id}
              className="mx-auto text-center flex gap-x-4 items-start"
            >
              <div className="flex flex-col">
                <div className="text-6xl font-bold text-themeBlue-600">
                  {post.frontmatter.day}
                </div>
                <div className="text-base">{post.frontmatter.month}</div>
              </div>
              <div className="flex flex-col text-left pt-1">
                <Link
                  to={`/blog${post.frontmatter.slug}`}
                  className="pb-3 font-bold tracking-wide uppercase text-base hover:text-themeBlue-600 transition delay-150 duration-300 ease-in-out"
                >
                  {post.frontmatter.title}
                </Link>
                <div className="text-base">{parse(post.excerpt)}</div>
                <div className="py-8">
                  <Link
                    to={post.frontmatter.slug}
                    className="px-5 py-3 mt-2 border border-gray-400 font-bold tracking-wide uppercase text-base rounded-full hover:bg-themeBlue-600 hover:text-white hover:border-0 transition delay-150 duration-300 ease-in-out"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default LatestNews

import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const BlogPage = () => {
  const pageMeta = {
    title:
      "Outsourcing Companies| Companies That Outsource | Scenic City Business Solutions",
    description:
      "The blog page for Scenic City Business Solutions one of the PEO companies providing accounting outsourcing, outsourcing for IT services, and much more.",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">Blog</h1>
    </Layout>
  )
}

export default BlogPage

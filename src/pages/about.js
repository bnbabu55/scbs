import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const AboutPage = () => {
  const pageMeta = {
    title:
      "Small Business Outsourcing | Support Services for Small Business | Scenic City Business Solutions",
    description:
      "Scenic City provides a full range of outsource business services including outsourcing human resources, outsourcing IT services, outsourcing finance functions and much more.",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">About Us</h1>
    </Layout>
  )
}

export default AboutPage

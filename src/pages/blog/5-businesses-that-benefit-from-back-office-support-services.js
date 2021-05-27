import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const Blog2Page = () => {
  const pageMeta = {
    title:
      "5 Businesses that Benefit from Back Office Support Services Chattanooga, TN | Scenic City Business Solutions",
    description:
      "Here are 5 examples of specific types of businesses that may benefit from outsourcing back office support services.",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">
        5 BUSINESSES THAT BENEFIT FROM BACK OFFICE SUPPORT SERVICES
      </h1>
    </Layout>
  )
}

export default Blog2Page

import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const Blog1Page = () => {
  const pageMeta = {
    title:
      "Benefits of Outsourced CFO Services Chattanooga, TN | Outsourcing Financial Functions Chattanooga, TN  | Scenic City Business Solutions",
    description:
      "All companies could benefit from the services of a Chief Financial Officer, but not all companies can justify the cost. That's where an outsourced CFO can help.",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">
        5 BENEFITS OF HIRING AN OUTSOURCED CHIEF FINANCIAL OFFICER
      </h1>
    </Layout>
  )
}

export default Blog1Page

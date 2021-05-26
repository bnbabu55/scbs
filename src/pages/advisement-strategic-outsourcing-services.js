import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const AdvisePage = () => {
  const pageMeta = {
    title:
      "SEO Outsourcing Services | Outsourcing CFO Services | Scenic City Business Solutions",
    description:
      "Scenic City provides advisement strategic outsourcing services such as SEO outsourcing services and outsourcing CFO services, and other small business support services",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">Advisement Services</h1>
    </Layout>
  )
}

export default AdvisePage

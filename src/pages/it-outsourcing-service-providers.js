import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ITPage = () => {
  const pageMeta = {
    title:
      "IT Outsourcing Service Providers | Outsourced IT Services | Scenic City Business Solutions",
    description:
      "Scenic City is one of the Chattanooga area&#039;s leading IT outsourcing service providers, as well as providing additional back office support solutions.",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">
        Information Technology Services
      </h1>
    </Layout>
  )
}

export default ITPage

import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ServicesPage = () => {
  const pageMeta = {
    title:
      "Professional Employer Organization | Back Office Outsourcing Services | Scenic City Business Solutions",
    description:
      "Scenic City is a professional employer organization providing business outsourcing services such as accounting outsourcing, outsourcing advisory services and more.",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">Services</h1>
    </Layout>
  )
}

export default ServicesPage

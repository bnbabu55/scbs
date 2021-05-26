import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const HRPage = () => {
  const pageMeta = {
    title:
      "HR Outsourcing Companies | Human Resources Outsourcing | Scenic City Business Solutions",
    description:
      "Scenic City is a professional employer organization providing HR outsourcing solutions including staffing outsourcing services and other back office support services",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">
        Human Resource Services
      </h1>
    </Layout>
  )
}

export default HRPage

import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const PrivacyPage = () => {
  const pageMeta = {
    title:
      "Privacy Policy | SEO Outsourcing Services | Scenic City Business Solutions",
    description:
      "Details about the Privacy Policy for Scenic City Business Solutions, a professional employer organization providing support services for small businesses",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">Privacy Policy</h1>
    </Layout>
  )
}

export default PrivacyPage

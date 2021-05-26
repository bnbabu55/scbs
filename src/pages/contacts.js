import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const ContactsPage = () => {
  const pageMeta = {
    title:
      "Companies That Outsource | Professional Employer Organizations | Scenic City Business Solutions",
    description:
      "Contact information for Scenic City business solutions, a PEO professional employer organization providing small business support services for the Chattanooga area",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">Contacts</h1>
    </Layout>
  )
}

export default ContactsPage

import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const AccountingPage = () => {
  const pageMeta = {
    title:
      "Accounting Outsourcing | Outsource Financial Services | Scenic City Business Solutions",
    description:
      "Scenic City provides outsource financial services such as payroll outsourcing services, outsourced controller services, and many other accounting outsourcing services",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <h1 className="font-black text-5xl text-center">
        Accounting Outsourcing Services
      </h1>
    </Layout>
  )
}

export default AccountingPage

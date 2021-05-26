import React from "react"
import HeroBanner from "../components/HeroBanner"
import HomeAbout from "../components/HomeAbout"
import HomeContact from "../components/HomeContact"
import HomeServices from "../components/HomeServices"
import LatestNews from "../components/LatestNews"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const HomePage = () => {
  const pageMeta = {
    title:
      "Back Office Support Services | Business Outsourcing | Scenic City Business Solutions",
    description:
      "Scenic City provides outsource business services including accounting outsourcing, HR outsourcing solutions, and even SEO outsourcing services in its suite of office support solutions",
  }
  return (
    <Layout>
      <Seo pageMeta={pageMeta} />
      <HeroBanner />
      <HomeAbout />
      <HomeServices />
      <LatestNews />
      <HomeContact />
    </Layout>
  )
}

export default HomePage

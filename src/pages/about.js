import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import Bio from "../components/bio"
import ProfileImage from "../assets/images/profile_image.png"


const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="pages about_page">
        <img src={ProfileImage} alt="me" className="profile_image"/>
        <Bio /> 
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
    nodes {
      id
      title
      cookTime
      prepTime
    }
  }

  }
`

export default About 
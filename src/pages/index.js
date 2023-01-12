import * as React from "react"
//import { Link } from "gatsby" 
import Layout from "../components/layout"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"
import "../assets/css/main.css"


export default function Home() {
  return( 
    <Layout>
    <Seo title="Home Page" description="this is home page" />
      <main className="pages index_page">
        <header>

        </header>
        <AllRecipes />
      </main>

    </Layout>

  )
}

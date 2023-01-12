import React from "react"
import Layout from "../components/layout"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"

const Recipes = () => {
	return(
      <Layout>
      <Seo title="Recipes" />
      	<main className="pages">
          <AllRecipes />
        </main>
      </Layout>
	)
}

export default Recipes 
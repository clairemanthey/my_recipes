import React from "react"
import {graphql} from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/layout"
import Seo from "../components/SEO"

const TagTemplate = ({data, pageContext}) => { 
	const recipes = data.allContentfulRecipe.nodes
	return(
	  <Layout>
	    <Seo title={pageContext.tag} />
	    <main className="pages tag_tempate">
	      <p className="individual_tag_title">{pageContext.tag}</p>
	      <div className="tag_recipe_list">
	      	<RecipesList recipes={recipes} />
	      </div>
	    </main>
	  </Layout>
	)
}
export const query = graphql `
  query GetRecipesByTag($tag:String) {
    allContentfulRecipe(sort: {title: ASC}, filter: {content: {tags: {eq: $tag}}}) {
      nodes {
        title
        id
        cookTime
        prepTime
      }
    }
  }
`


export default TagTemplate
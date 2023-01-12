import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        id
        prepTime
        cookTime
        title
        content {
          tags
        }
      }
    }
  }
`
const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
	return(
	<section className="recipes-container">
    <TagsList recipes={recipes}/>

	  <RecipesList recipes={recipes}/>

	</section>
	)
}

export default AllRecipes
import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"


const RecipesList = ({ recipes = [] }) => {
  return(
    <div className="featured-recipes">
      {recipes.map(recipe => {
        const { id, title, prepTime, cookTime } = recipe
        const slug = slugify(title, {lower:true}) 
        return (
          <div className="recipe" key={id}>

            <Link key={title} to={`/${slug}`} className="center txt">
              <h4 className="recipe_title ">{title}</h4>
              <p className="recipe_amount">
                Prep : {prepTime}min | Cook : {cookTime}min
              </p>
            </Link>
            <Link to={`/${slug}`}><button className="recipe-btn">Recipe</button></Link>
          </div>
        )
      })}
    </div>
  )
}

export default RecipesList
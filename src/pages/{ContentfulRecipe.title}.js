import React from "react"
import {graphql, Link} from "gatsby"
import {BsClockHistory, BsClock, BsPeople} from "react-icons/bs"
import Layout from "../components/layout"
import slugify from "slugify"
import Seo from "../components/SEO"

const RecipeTemplate = ({data}) =>{
	const { 
		title, 
		cookTime, 
		content, 
		prepTime, 
		servings, 
		description:{description}} = data.contentfulRecipe
	const {tags, instructions, ingredients, tools} = content
	return(
		<Layout>
		  <Seo title={title} description={description} />
   		  <main className="pages recipe-page">
		      <h2 className="center recipe-title">{title}</h2>
		      <div>
    		    <section className="recipe-content">

		          <article>
  		          <div className="recipe_info recipe_numbers">
		              <article>
		              	<h5>Prep Time</h5>
		              	<div className="time_container">
  		             	  <BsClock />
  		              	<p>{prepTime}</p>
  	  	            </div>
		             </article>
		             <article>
		              	<h5>Cook Time</h5>
		          	    <div className="time_container">
  	  	          	  <BsClockHistory />
    	   	          	<p>{cookTime}</p>
		                </div>
		              </article>
		              <article>
		          	    <h5>Servings</h5>
 		          	    <div className="time_container">
	  	          	    <BsPeople />
  		          	    <p>{servings}</p>
		                </div>
		              </article>		          		          
		            </div>

		          </article>
		    	
		        </section >
		    {/*Content*/}
		        <section className="recipe-content">
		          <article className="recipe_info ">
		      	    <div className="recipe_info_container recipe_ingredients">
		      	      <h4>Ingredients</h4>
		      	      {ingredients.map((item, index) => {
		      	  	    return(
		      	  		    <p key={index} className="single-ingredient">
		      	  		    {item}
		      	  		    </p>
		      	  	    )
		      	      })}
		      	    </div>
	      	      <div className="recipe_info_container recipe_tools">
		      	      <h4>Tools</h4>
		      	        {tools.map((item, index) => {
		      	  	      return(
		      	  		      <p key={index} className="single-tools">
		      	  		      {item}
		      	  		      </p>
		      	  	      )
		      	        })}
		      	      </div>		      	
		          </article>
		          <article className="recipe_instruction_container">
		      	    <h4 className="center upper recipe_instructions">instructions</h4>
		      	    {instructions.map((item, index) => {
		      			  return(
		      			    <div key={index} 
		      			      className="single-instruction">
		      			      <header>
		      			        <p className="center instructions_step">Step {index + 1}</p>
		      			        <div></div>
		      			      </header> 
		      			      <p>{item}</p>
		      			    </div>
		      			  )})
		      	    }
		          </article>
		        </section>
		        <section className="recipe-content">
		        	<article className="recipe_tag_container">
		        		<p className="recipe-tags">
		              <span className="recipe_tag_title">Tags: </span>{tags.map((tag, index) => {
		              	const slug = slugify(tag, { lower: true })
		              	return(
		              		<Link to={`/tags/${slug}`} key={index} className="recipe_tag">{tag}</Link>
		        	  	  )
		        	    })}
		            </p>
		        	</article>
		        </section>
		      </div>
		    </main>
		</Layout>
  )
}

export const query = graphql `
query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    content {
      ingredients
      instructions
      tags
      tools
    }
    description {
      description
    }
    prepTime
    servings
  }
}
`

export default RecipeTemplate
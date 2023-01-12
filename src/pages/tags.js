import React from "react"
import Layout from "../components/layout"
import {graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import slugify from "slugify"
import Seo from "../components/SEO"


const Tags = ({ data }) => {
	const newTags = setupTags(data.allContentfulRecipe.nodes)

	return(
      <Layout>
        <Seo title="Tags" />
      	<main className="pages tags_page">
      	  <section>
            <h2 className="tag_page_header">Categories</h2>
            <article className="tag_page_container">
      	    {newTags.map((tag, index) => {
      	    	const [text] = tag
              const slug = slugify(text, { lower: true })

      	    	return(
      	    		<Link to={`/tags/${slug}`} key={index} className="tag_link center">
      	    		  <h5 className="tag_header">{text}</h5>
      	    		</Link>
      	   		)
      	    })}
            </article>
      	  </section>
      	</main>
      </Layout>
	)
}
export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags 
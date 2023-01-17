import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/layout"
import { Link } from "gatsby"

const pageNotFound = () => {
	return(
    <Layout>
      <Seo title="Error" />
      <main className="error-page">
        <section className="error-section">
          <h1>Recipe Not Found</h1>
          <h3>Oops, there's no recipe yet...</h3>
        </section>
        <section className="error-link-section">
          <h3>You might be looking for</h3>
          <div className="error_link_container">
            <Link to="/" className="tag_header error-link">Home</Link>
            <Link to="/recipes" className="tag_header error-link">Recipes</Link>
            <Link to="/tags" className="tag_header error-link">Tags</Link>          
          </div>
        </section>
      </main>
    </Layout>
	)
}

export default pageNotFound 
import React from "react"
import Seo from "../components/SEO"
import Layout from "../components/layout"


const pageNotFound = () => {
	return(
    <Layout>
      <Seo title="Error" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page Not Found</h3>
        </section>
      </main>
    </Layout>
	)
}

export default pageNotFound 
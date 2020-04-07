import React from "react"

import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page Not Found</h1>
    <p>It seems there is nothing here! If this seems like an error, let us know!</p>
    {/* TODO This */}
    {/* <EmailContactBtn /> */}
  </Layout>
)

export default NotFoundPage

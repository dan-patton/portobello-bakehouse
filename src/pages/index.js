import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="The Least Yeasty House Dough">
      <h1>No stale bread here matey</h1>
      <p>Who likes manky old bread anyway?</p>
      <StaticImage 
        src="../images/simple loaf.jpg" 
        alt="A beautiful sourdough cob, with a mild attempt at fancy scoring, looking fresh and fragrant"
      />
    </Layout>
  )
}

export default IndexPage

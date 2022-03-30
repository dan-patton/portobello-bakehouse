import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Porty Bakehouse">
      <h1>No stale bread here matey</h1>
      <p>Who likes manky old bread anyway?</p>
      <StaticImage 
        src="https://www.theperfectloaf.com/wp-content/uploads/2020/01/theperfectloaf-a-simple-workweek-sourdough-bread-recipe-1.jpg" 
        alt="A beautiful sourdough cob, with a mild attempt at fancy scoring, looking fresh and fragrant"
      />
    </Layout>
  )
}

export default IndexPage

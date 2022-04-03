import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Porty Bakehouse">
            <h1>The House is Always Baking</h1>
            <p>Bread is constantly baked, jammed up and eaten. This is correct.</p>
            <StaticImage 
                src="../images/multi loaves.jpg" 
                alt="A selection of delicious bread, the result of yet more yeast, flour and water"
            />
        </Layout>
    )
}

export default AboutPage
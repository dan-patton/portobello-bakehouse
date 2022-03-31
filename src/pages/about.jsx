import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Porty Bakehouse">
            <h1>The House is Always Baking</h1>
            <p>Bread is constantly baked, jammed up and eaten. This is correct.</p>
            <StaticImage 
                src="https://www.ecowatch.com/wp-content/uploads/2022/03/bread.jpg" 
                alt="A selection of delicious bread, the result of yet more yeast, flour and water"
            />
        </Layout>
    )
}

export default AboutPage
import React from 'react'
import SEO from '../seo'
import Layout from '../layout'
import { TitleHeader } from './TitleHeader'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { PostList } from './PostList'

export const LandingPageComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      articles: allMdx(
        filter: { frontmatter: { contentType: { eq: "post" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              author
              date
              title
              path
            }
            excerpt(pruneLength: 80)
          }
        }
      }
      image: file(relativePath: { eq: "moni_pic.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { articles, image } = data

  return (
    <Layout>
      <SEO title="Home" />
      <Img
        fluid={image.childImageSharp.fluid}
        className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto mt-16 border-gray-500 border-2 shadow"
      />
      <TitleHeader />
      <PostList posts={articles.edges} />
    </Layout>
  )
}

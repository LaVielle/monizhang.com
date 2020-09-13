import React from 'react'
import SEO from '../seo'
import Layout from '../layout'
import { TitleHeader } from './TitleHeader'
import { graphql, useStaticQuery } from 'gatsby'
import { PostList } from './PostList'

export const LandingPageComponent = () => {
  const articlesData = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { contentType: { eq: "post" } } }) {
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
    }
  `)

  console.log({ articlesData })

  return (
    <Layout>
      <SEO title="Home" />
      <TitleHeader />
      <PostList posts={articlesData.allMdx.edges} />
    </Layout>
  )
}

import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { MDX } from '../components/MDX'
import { Divider, Header1, Paragraph } from '../elements/text'

export default function PostTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <div className="container mx-auto md:pl-12 md:pr-12 lg:pl-24 lg:pr-32 xl:pl-32 xl:pr-64">
        <Header1>{mdx.frontmatter.title}</Header1>
        <Paragraph extraClassName="text-gray-600">
          Posted on {mdx.frontmatter.date}
        </Paragraph>
        <Divider />
        <MDX body={mdx.body} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query PostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      id
      frontmatter {
        path
        date
        title
      }
    }
  }
`

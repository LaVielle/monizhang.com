/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('./src/templates/post.js')

  const post = await graphql(`
    {
      allMdx(filter: { frontmatter: { contentType: { eq: "post" } } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (post.errors) {
    console.log(post.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  post.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    })
  })
}

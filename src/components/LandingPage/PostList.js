import React from 'react'
import { Link } from 'gatsby'

export const PostList = ({ posts }) => (
  <>
    {posts.map(el => (
      <Link to={el.node.frontmatter.path} key={el.node.frontmatter.title}>
        <div className="m-4 p-4 border border-w-2 rounded-md border-gray-500">
          <h3 className="text-2xl border-b-2 border-gray-500 mb-2">
            {el.node.frontmatter.title}
          </h3>
          <p className="text-gray-700 mb-2">{el.node.frontmatter.date}</p>
          <p>{el.node.excerpt}</p>
        </div>
      </Link>
    ))}
  </>
)

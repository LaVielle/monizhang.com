import React from 'react'
import { Link } from 'gatsby'
import { Divider } from '../../elements/text'

export const PostList = ({ posts }) => (
  <div className="mx-4 md:mx-8 lg:mx-56 ">
    {posts.map(el => (
      <Link to={el.node.frontmatter.path} key={el.node.frontmatter.title}>
        <div className="m-4 p-4 border border-w-2 border-gray-400 hover:shadow hover:bg-gray-100">
          <h3 className="text-2xl mb-2">{el.node.frontmatter.title}</h3>
          <p className="text-gray-700 mb-2">{el.node.frontmatter.date}</p>
          <Divider />
          <p className="mt-2">{el.node.excerpt}</p>
        </div>
      </Link>
    ))}
  </div>
)

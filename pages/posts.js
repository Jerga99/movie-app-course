

import React from 'react'
import { getPosts } from '../actions'

class Posts extends React.Component {

  static async getInitialProps() {
    const posts = await getPosts()

    return { posts }
  }

  render() {
    const { posts } = this.props
    return (
      <div className="container">
        <h1>I am posts page</h1>
        <ul>
          {
            posts.map(p => (
                <li key={p.id}>
                  <span>{p.id}: </span> <span>{p.title}</span>
                </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Posts

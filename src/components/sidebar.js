import React, { Component } from 'react'
import Link from 'gatsby-link'

class sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">首页</Link>
        </div>
        <div>
          <Link to="/paper">Paper</Link>
        </div>
      </div>
    )
  }
}

export default sidebar

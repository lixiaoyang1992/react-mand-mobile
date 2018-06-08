import React, { Component } from 'react'
import Link from 'gatsby-link'

class sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">组件1</Link>
        </div>
        <div>
          <Link to="/page-2">组件2</Link>
        </div>
      </div>
    )
  }
}

export default sidebar

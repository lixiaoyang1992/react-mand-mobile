import React, { Component } from 'react'
import { Link } from 'gatsby'

class Menu extends Component {
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 100,
          bottom: 0,
          left: 0,
          width: 100,
        }}
      >
        <div>
          <Link to="/">主页</Link>
        </div>
        <div>
          <Link to="/paper">Paper</Link>
        </div>
        <div>
          <Link to="/checkableTag">CheckableTag</Link>
        </div>
      </div>
    )
  }
}

export default Menu

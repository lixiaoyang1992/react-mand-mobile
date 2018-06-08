import React from 'react'
import Link from 'gatsby-link'
import { Button } from '../../lib'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Button>按钮</Button>
  </div>
)

export default SecondPage

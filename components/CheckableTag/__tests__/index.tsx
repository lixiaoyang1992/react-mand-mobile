import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import CheckableTag from '../index'

describe('<CheckableTag />', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div')
  //   ReactDOM.render(<CheckableTag />, div)
  // })

  it('rerendersnd title', () => {
    const title = 'test'
    let a = <CheckableTag checked={false} onChange={() => {}} />
    const wrapper = shallow(a)
    expect(wrapper.find('.checkable-tag')).to.have.length(1)
  })
})

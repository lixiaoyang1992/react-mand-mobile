import * as React from 'react'
import classNames from 'classnames'
import './style.less'

type ReactNode = React.ReactNode

export interface PaperProps {
  children?: ReactNode
  style?: any
  className?: string
}

export interface PaperState {}

export default class Paper extends React.Component<PaperProps, PaperState> {
  constructor(props: PaperProps) {
    super(props)
  }

  render() {
    const { children, style, className } = this.props
    const classname = classNames('paper', className)
    return (
      <div className={classname} style={style}>
        {children}
      </div>
    )
  }
}

import * as React from "react";

type ReactNode = React.ReactNode;

export interface DropmenuProps {
  children?: ReactNode;
  onClick?: Function;
}

export interface DropmenuState {}

class Dropmenu extends React.Component<DropmenuProps, DropmenuState> {
  handleClick = (e: any) => {
    const { onClick } = this.props;
    onClick(e);
  };

  render() {
    const { children } = this.props;
    return <div onClick={this.handleClick}>{children}</div>;
  }
}

export default Dropmenu;

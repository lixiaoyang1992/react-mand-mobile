import * as React from "react";

type ReactNode = React.ReactNode;

export interface ButtonProps {
  children?: ReactNode;
  onClick?: Function;
}

export interface ButtonState {}

class Button extends React.Component<ButtonProps, ButtonState> {
  handleClick = (e: any) => {
    const { onClick } = this.props;
    onClick(e);
  };

  render() {
    const { children } = this.props;
    return <button onClick={this.handleClick}>{children}</button>;
  }
}

export default Button;

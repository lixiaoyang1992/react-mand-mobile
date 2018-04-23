import * as React from "react";

type ReactNode = React.ReactNode;

export interface NoticeBarProps {
  children?: ReactNode;
  onClick?: Function;
}

export interface NoticeBarState {
  isShow: boolean;
}

class NoticeBar extends React.Component<NoticeBarProps, NoticeBarState> {
  state = {
    isShow: true
  };

  handleClick = (e: any) => {
    const { onClick } = this.props;
    onClick(e);
  };

  render() {
    const { children } = this.props;
    const { isShow } = this.state;
    if (isShow) return <div className="md-notice-bar">{children}</div>;
  }
}

export default NoticeBar;

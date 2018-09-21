import * as React from 'react';
import classNames from 'classnames';

type ReactNode = React.ReactNode;

export interface CheckableTagProps {
  checked: boolean;
  onChange: Function;
  children?: ReactNode;
}

export interface CheckableTagState {}

class CheckableTag extends React.Component<
  CheckableTagProps,
  CheckableTagState
> {
  onClick = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  }
  render() {
    const { children, checked } = this.props;
    let classname = classNames('checkable-tag', {
      'checkable-tag-checked': checked,
    });
    return (
      <div className={classname} onClick={this.onClick}>
        {children}
      </div>
    );
  }
}

export default CheckableTag;

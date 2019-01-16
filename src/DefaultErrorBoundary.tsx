import * as React from 'react';

export default class DefaultErrorBoundary extends React.Component {
  public state = {
    isError: false
  };

  public static getDerivedStateFromError() {
    return { isError: true };
  }

  public render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <div>Something went wrong!</div> : children;
  }
}

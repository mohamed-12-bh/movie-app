import React from 'react';
import { Spinner } from 'reactstrap';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p> <Spinner color="secondary" /> </p>);
  }
}
export default WithLoading;
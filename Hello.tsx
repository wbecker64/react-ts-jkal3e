import React, { Fragment } from 'react';

export default ({ name, children }) => (
  <Fragment>
    <h1>Hello {name}!</h1>
    {children}
  </Fragment>
);

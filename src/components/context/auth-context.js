import React from 'react';
const authContext = React.createContext({
  authenticated: False,
  login: () => {},
});

export default authContext;

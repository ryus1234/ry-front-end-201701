import React from 'react'

const Link = ({ url, children }) => (
  <a href={ url }>
    { children }
  </a>
);

export default Link
// import React from 'react';

console.log(
  '%c HEY THERE!',
  `
    background-color: #0058bc;
    color: white;
    font-size: 2.8vw;
    line-height: 1;
    padding: 4rem 5vw;
  `,
);

export default ({ children }) => {
  return children;
};

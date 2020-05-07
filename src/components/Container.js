import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-10 sm:px-4 lg:px-8">{children}</div>
  );
};

export default Container;

import React from 'react';

const Header = (props) => {
  // render JSX
  return (
    <nav className="justify-content-center navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/#">{props.title}</a>
    </nav>
  );
};

export default Header;

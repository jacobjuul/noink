import React, { PropTypes } from 'react';
import './Footer.scss';

const Footer = ({ className }) => {
  return (
    <footer className="Footer">
      Footer goes heres
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer

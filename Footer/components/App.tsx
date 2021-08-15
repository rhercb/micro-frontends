import React from 'react';
import FooterExport from './Export';
import ReactDOM from 'react-dom';

const Footer = (): JSX.Element => {
  return <FooterExport></FooterExport>;
};

export default Footer;

ReactDOM.render(
  <FooterExport></FooterExport>,
  document.getElementById('footer')
);

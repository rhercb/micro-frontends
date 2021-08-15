import Footer from './Footer/Footer';
import React from 'react';
import ReactDOM from "react-dom";

const FooterExport = ():JSX.Element => {
  return <Footer></Footer>
}

export default FooterExport;

ReactDOM.render(<FooterExport></FooterExport>, document.getElementById('footer'));
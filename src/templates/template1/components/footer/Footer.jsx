import React from 'react'
import './footer.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { ArrowUpward } from '@mui/icons-material';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-text">
            <p>Copyright &copy; 2023 by Festus Divinely | All Rights Reserved.</p>
        </div>

        <div className="footer-iconTop">
        <Link
            className="link"
            to="header"
            spy={true}
            smooth={true}
            offset={50}
            duration={50}
          >
            <ArrowUpward className='arrowIcon'/>
          </Link>
        </div>
    </footer>
  )
}

export default Footer
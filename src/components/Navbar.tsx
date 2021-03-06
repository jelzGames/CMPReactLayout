import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { IconContext } from 'react-icons';
import { INavBarProps } from "../interfaces/INavbar"

const Navbar : React.FC<INavBarProps> = ({ items }) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {items.map((item, index) => {
                return (
                  <li key={index} className={item.item.cName}>
                    <Link to={item.item.path}>
                      {item.item.icon}
                      <span>{item.item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar;
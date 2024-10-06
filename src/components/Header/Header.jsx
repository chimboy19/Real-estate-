import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened, setMenuOpen] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <=800){
      return { right:!menuOpened && '-100%'}
    }
  }
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth  h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler
        onOutsideClick={()=>{setMenuOpen(false)}}> 
          <div className="h-menu flexCenter " style={getMenuStyles(menuOpened)}>
            <a href="">Residences</a>
            <a href="">Our values</a>
            <a href="">Contacts Us</a>
            <a href="">Get started</a>

            <button className="button">
              <a href=""> Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header


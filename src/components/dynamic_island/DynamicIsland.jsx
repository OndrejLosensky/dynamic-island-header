import React, { useState, useEffect,useRef } from 'react';
import { Link } from "react-scroll";
import { navLinkData } from '../../constants/navigation';

const DynamicIsland = () => {
  const [isHovering, setIsHovering] = useState(true);
  const [showLinks, setShowLinks] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAnchor = () => {
    const element = document.getElementById('login-section');
    const offset = 60; 
  
    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setTimeout(() => {
      setShowLinks(true);
    }, 180); 
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowLinks(false);
  };

  const handleClickOutside = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
        setIsHovering(false);
    }
  };

  return (
    <section 
    className='w-[250px] mx-auto duration-500 hover:w-[1000px] relative '
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClickOutside}
  >
    <div className="h-[64px] py-4 island-bg flex items-center justify-between" style={{ borderTopLeftRadius: '45px', borderTopRightRadius: '45px', borderBottomLeftRadius: '45px', borderBottomRightRadius: '45px' }}>
      <h3 className="text-md pt-1 island-text text-customWhite text-center font-semibold pl-12 cursor-pointer" onClick={scrollToTop}>
        Dynamic Island App.
      </h3>
      <div className="flex items-center justify-center flex-grow">
        {showLinks && (
          <div className="text-md pt-1 island-text flex justify-center">
              {
              navLinkData.map(({_id, title, link}) => (
                <ul>
                  <li className='mr-4 cursor-pointer underline-effect hover:no-underline' 
                      key={_id}>
                      <Link
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {title}
                      </Link>
                  </li>
                </ul>
              ))
              }
            
          {/*
            <p onClick={() => scrollToSection('anchor1')} className="text-white cursor-pointer underline-effect hover:no-underline">Section 1</p>
            <p onClick={() => scrollToSection('anchor2')} className="text-white cursor-pointer underline-effect hover:no-underline ml-4">Section 2</p>
            <p onClick={() => scrollToSection('anchor3')} className="text-white cursor-pointer underline-effect hover:no-underline ml-4">Section 3</p>
            <p onClick={() => scrollToSection('footer')} className="text-white cursor-pointer underline-effect hover:no-underline ml-4">Footer</p>
          */}
          </div>
        )}
      </div>
      {showLinks && (
        <div className="text-md pt-1 pr-4 island-text flex items-center">
          <button className='island-btn px-4 py-1  border-2 bg-transparent ml-4 rounded-lg hover:bg-customWhite hover:text-customBlack duration-300' onClick={scrollToAnchor}>Login</button>
        </div>
      )}
    </div>
  </section>
  );
};

export default DynamicIsland;

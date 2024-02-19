import React, { useState } from 'react';

const DynamicIsland = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

  return (
    <section 
      className='w-[250px] mx-auto duration-500 hover:w-[1000px] relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-[60px] py-4 bg-black flex items-center justify-between" style={{ borderTopLeftRadius: '45px', borderTopRightRadius: '45px', borderBottomLeftRadius: '45px', borderBottomRightRadius: '45px' }}>
        <h3 className="text-md pt-1 text-white text-center font-semibold pl-12 cursor-pointer" onClick={scrollToTop}>
          Dynamic Island
        </h3>
        {showLinks && (
          <div className="text-md pt-1 text-white pr-12 flex flex-row cursor-pointer">
            <p onClick={() => scrollToSection('anchor1')} className="text-white hover:underline">Link 1</p>
            <p onClick={() => scrollToSection('anchor2')} className="text-white hover:underline ml-4">Link 2</p>
            <p onClick={() => scrollToSection('anchor3')} className="text-white hover:underline ml-4">Link 3</p>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicIsland;

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
    <div className="h-[62px] py-4 bg-customBlack flex items-center justify-between" style={{ borderTopLeftRadius: '45px', borderTopRightRadius: '45px', borderBottomLeftRadius: '45px', borderBottomRightRadius: '45px' }}>
      <h3 className="text-md pt-1 text-customWhite text-center font-semibold pl-12 cursor-pointer" onClick={scrollToTop}>
        Dynamic Island App.
      </h3>
      <div className="flex items-center justify-center flex-grow">
        {showLinks && (
          <div className="text-md pt-1 text-white flex justify-center">
            <p onClick={() => scrollToSection('anchor1')} className="underline hover:no-underline no-underline text-white cursor-pointer hover:underline">Section 1</p>
            <p onClick={() => scrollToSection('anchor2')} className="underline hover:no-underline no-underline text-white cursor-pointer hover:underline ml-4">Section 2</p>
            <p onClick={() => scrollToSection('anchor3')} className="underline hover:no-underline no-underline text-white cursor-pointer hover:underline ml-4">Section 3</p>
          </div>
        )}
      </div>
      {showLinks && (
        <div className="text-md pt-1 pr-4 text-white flex items-center">
          <button className='px-4 py-1 border-white border-2 bg-transparent ml-4 rounded-md hover:bg-white hover:text-black duration-300'>Contact me</button>
        </div>
      )}
    </div>
  </section>
  );
};

export default DynamicIsland;

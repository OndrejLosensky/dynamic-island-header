import React, {useState} from 'react'
import light from "../../assets/light.png"
import dark from "../../assets/dark.png"

const Toggle = () => {
  const [isLight, setIsLight] = useState(true);


  const toggleTheme = () => {
    setIsLight(!isLight);
    const root = document.documentElement;
    root.classList.toggle('dark', !isLight);
  };

  return (
    <div className='pl-2 pt-4'>
      <button className='cursor-pointer' onClick={toggleTheme}> 
        <img src={isLight ? light : dark} alt="Icon" className='w-8 h-8' />
      </button>
    </div>
  );
};

export default Toggle
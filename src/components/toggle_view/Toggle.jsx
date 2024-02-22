import React, {useState} from 'react'
import light from "../../assets/light.png"
import dark from "../../assets/dark.png"

const Toggle = () => {
  const [isLight, setIsLight] = useState(true);


  return (
    <div className='border-blue-500 border-2 rounded-lg'>
      <button className='cursor-pointer py-2 px-4'> 
        {/*<img src={isLight ? light : dark} alt="Icon" className='w-8 h-8' />*/}
        Toggle dark mode
      </button>
    </div>
  );
};

export default Toggle
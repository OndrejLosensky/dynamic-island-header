import React from 'react'

const Footer = () => {
  return (
    <div className="w-[58%] mx-auto h-[50px] py-2 bg-customGray"style={{borderTopLeftRadius: '35px', borderTopRightRadius: '35px'}}>
            <h3 className="text-md pt-2 text-customWhite text-center">
                 Created by <a className='font-bold underline-offset-2 underline hover:text-customBlue duration-200' href="https://github.com/OndrejLosensky">Ondřej Losenský</a> | ⭐️ Star this project if you like it!
            </h3>
    </div>
  )
}

export default Footer
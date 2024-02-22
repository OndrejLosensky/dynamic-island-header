import React from 'react'

const Title = ({heading}) => {
  return (
    <div>
        <h1 className='title-layout text-4xl text-customBlack font-bold uppercase'>{heading}</h1>
    </div>
  )
}

export default Title
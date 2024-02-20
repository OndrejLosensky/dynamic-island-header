import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Data = () => {
  useEffect(() => {
    AOS.init({duration: "1200" });
  },[])
  return (
    <div data-aos="fade-left">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada tortor a lorem feugiat in tincidunt metus finibus. Duis euismod libero in justo dapibus <br />
        non consectetur tortor rhoncus. Proin eu urna vitae libero fermentum lacinia. In hac habitasse platea dictumst. Nulla facilisi. Donec id mi fermentum, viverra <br />
        leo nec, pellentesque magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
        um lacinia. In hac habitasse platea dictumst. Nulla facilisi. Donec id mi fermentum, viverra leo nec, pellentesque magna. Lorem ipsum dolor sit amet, consecte <br />
        tur adipiscing elit. Sed malesuada tortor a lorem feugiat,
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada tortor a lorem feugiat in tincidunt <br />
        non consectetur tortor rhoncus. Proin eu urna vitae libero fermentum lacinia. In hac habitasse platea dictumst. Nulla facilisi. Donec id mi fermentum, viverra <br />
        leo nec, pellentesque magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada tortor a lorem feugiat. <br />
        um lacinia. In hac habitasse platea dictumst. Nulla facilisi. Donec id mi fermentum, viverra leo nec, pellentesque magna. Lorem ipsum dolor sit amet, consecte <br />
        tur adipiscing elit. Sed malesuada tortor a lorem feugiat,
        </p>
  </div>
  )
}

export default Data
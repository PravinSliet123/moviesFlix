import React, { useEffect, useState } from 'react'
import "./Nav.css"
import NavLogo from "./images/DSC_0083-removebg-preview.png"
function Nav() {

    const [show, handleShow] = useState(false)
      useEffect(()=>{
            window.addEventListener("scroll",()=>{
                if(window.scrollY>100)
                {
                    handleShow(true);
                
                }
                else
                {
                    handleShow(false);
                }
            });
            return ()=>{
                window.removeEventListener("scroll");
            }
         
        },[]);
       
    


  return (
    <div className={`nav ${show && "nav__black"}`} >


    <img className='nav__logo'
     src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="NetflixLogo" />

    <img className='nav__avatar' src={NavLogo} alt="" />
    </div>
  )
}

export default Nav
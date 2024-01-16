import './Nav.css'
import React from 'react'
import { useState } from 'react'
import menuLogo from "../../assets/menuImage.png"



function Nav() {

    const [click, setClick] = useState (true)

    function NavbarReaction () {
        const nav = document.querySelector(".buttonNavbar");
        const menuLogo = document.querySelector(".menuLogoNavBar")

        console.log("try")


            if (click === true) {
                
                nav.style.right = "-100vw"
                menuLogo.style.display ="flex"
                setClick (false)

            } else {

                nav.style.right ="0vw"
                menuLogo.style.display ="none"
                setClick (true)

            }
    }

  return (


    <div>
        <div className='navbar'>

        <div className='navbarTitle'>
        <h1>H</h1>
        <img className='menuLogoNavBar' onClick={NavbarReaction} src={menuLogo} />
        </div>

        <div className='buttonNavbar navbar'>
            <div className='closeButtonNavbar'>
            <h1 onClick={NavbarReaction} >X</h1>
        
            </div >

            <h1 className='buttonNavbarAnimation' >Home</h1>
            <h1 className='buttonNavbarAnimation'>About us</h1>
            <h1 className='buttonNavbarAnimation' >Prices</h1>
            <h1 className='buttonNavbarAnimation' >Contact</h1>


             </div>

        </div>








    </div>
  )
}

export default Nav
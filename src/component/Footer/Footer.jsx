import { useState } from 'react'
import React from 'react'
import './Footer.css'
import behanceLogo from '../../assets/behanceLogo.png'
import youtubeLogo from '../../assets/youtubeLogo.png'
import instagramLogo from '../../assets/instagramLogo.png'


function Footer() {
  return (
    <div>
        <div className='footer'>

            
            <div className='textFooter'>
                <p>Social Media</p>
            </div>

            <div className='socialMediaFooterLogo'>
                <img className='logoFooter behanceLogo' src={behanceLogo} />
                <img className='logoFooter youtubeLogo' src={youtubeLogo} />
                <img className='logoFooter instagramLogo' src={instagramLogo} />
            </div>

        </div>

    </div>
  )
}

export default Footer
import { useState } from 'react'
import React from 'react'
import './Contact.css'



function Contact() {

  const [clickeButtonContact, setClickeButtonContact] = useState(true)
  const [sentButtonText, setSentButtonText] = useState("Send")

  function ClickContact () {
    const buttonSend = document.querySelector(".sendContact")


    if (clickeButtonContact){
     buttonSend.style.background = "rgb(255, 155, 131)",  
     buttonSend.style.color= "white";
     setSentButtonText("Sent!")
     setClickeButtonContact(false)
    }else{
      buttonSend.style.background = "transparent", 
      buttonSend.style.color= "rgb(255, 155, 131)";
      setClickeButtonContact(true)
    }

  }

  


  return (
    <div className="contact" >
        <div className="titleContact" >
        <h1>Contact Us</h1>
        </div>

        <div  className='inputSectionContact'>
            <input  className="nameContact inputContact" type="text" placeholder="Name" />
            <input  className="phoneNumberContact inputContact" type="text" placeholder="Phone Number" />
            <p className="sendContact" onClick={ClickContact}>{sentButtonText}</p>
        </div>

    </div>
  )
}

export default Contact
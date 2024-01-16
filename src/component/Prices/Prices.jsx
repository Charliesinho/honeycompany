import React from 'react'
import "./Prices.SCSs"

function Prices() {

    function changePlan (plan) {
        const basic = document.querySelector(".pricesInfo1");
        const advanced = document.querySelector(".pricesInfo2");
        const ultra = document.querySelector(".pricesInfo3");
        const basicButton = document.querySelector(".pricesButton1");
        const advancedButton = document.querySelector(".pricesButton2");
        const ultraButton = document.querySelector(".pricesButton3");

        if (plan === "basic") {
            basic.style.display = "block";
            advanced.style.display = "none";
            ultra.style.display = "none";
            basicButton.style.background = "rgb(255, 155, 131)";
            advancedButton.style.background = "transparent";
            ultraButton.style.background = "transparent";
            basicButton.style.color = "white";
            advancedButton.style.color = "rgb(255, 155, 131)";
            ultraButton.style.color = "rgb(255, 155, 131)";
        } else if (plan === "advanced") {
            basic.style.display = "none";
            advanced.style.display = "block";
            ultra.style.display = "none";
            basicButton.style.background = "transparent";
            advancedButton.style.background = "rgb(255, 155, 131)";
            ultraButton.style.background = "transparent";
            basicButton.style.color = "rgb(255, 155, 131)";
            advancedButton.style.color = "white";
            ultraButton.style.color = "rgb(255, 155, 131)";
        } else if (plan === "ultra") {
            basic.style.display = "none";
            advanced.style.display = "none";
            ultra.style.display = "block";
            basicButton.style.background = "transparent";
            advancedButton.style.background = "transparent";
            ultraButton.style.background = "rgb(255, 155, 131)";
            basicButton.style.color = "rgb(255, 155, 131)";
            advancedButton.style.color = "rgb(255, 155, 131)";
            ultraButton.style.color = "white";
        }
    }

  return (
    <div id='pricesParent'>
        <h1>Pricing</h1>
        <div id='pricesButtons'>
            <button className='pricesButton1' onClick={() => changePlan("basic")}>Basic</button>
            <button className='pricesButton2' onClick={() => changePlan("advanced")}>Advanced</button>
            <button className='pricesButton3' onClick={() => changePlan("ultra")}>Ultra</button>
        </div>

        <div id='pricesInfo'>
            <div className='pricesInfo1'>
                <h2>Basic</h2>
                <p>• Beautifully animated landing page</p>
                <p>• Up to 3 interactive sections</p>
                <p>• Mobile and Desktop responsiveness</p>
            </div>
            <div className='pricesInfo2'>
            <h2>Advanced</h2>
                <p>• Everything from Basic</p>
                <p>• Beautifully animated multipage system</p>
                <p>• Up to 5 interactive sections per page</p>
                <p>• Log in system for your users</p>
            </div>
            <div className='pricesInfo3'>
            <h2>Ultra</h2>
                <p>• Everything from Advanced</p>
                <p>• We can create any project you need, from an online video game
                    to a social media, lets talk!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Prices
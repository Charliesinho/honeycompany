import React from 'react'
import "./Header.scss"

function Header() {
  return (
    <div id='headerParent'>
        <h1>HONEY</h1>
        <h2>Websites</h2>
        <div id='headerStats'>
            <div>
                <h3>+71</h3>
                <p>Clients</p>
            </div>

            <div>
                <h3>+247</h3>
                <p>Projects</p>
            </div>

            <div>
                <h3>7</h3>
                <p>Countries</p>
            </div>
        </div>
    </div>
  )
}

export default Header
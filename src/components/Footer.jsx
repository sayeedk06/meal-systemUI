import React from "react";

const currentDate = new Date()
const currentDateYear = currentDate.getFullYear()

export default function Footer(){
    return(
        <div className='footer'>
            <p>© {currentDateYear}, <a href="https://brain-freeze.netlify.app/#">BrainFreeze</a></p>
            
        </div>
    )
}
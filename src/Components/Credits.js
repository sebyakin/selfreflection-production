import React from 'react'

function Credits() {

    return (
        <>
        <div className="credits">

        <a
           href="https://www.instagram.com/olyabazilevich/"
           target="_blank"
           rel="noopener noreferrer">
            all_1n_0n3</a>

        <div className="instagram">
           <div className="circle">
             <div className="qr-code">
               <img src="../assets/qrcode.svg" />
             </div>
           </div>
           <a
          className="ar-experience"
          href="https://www.instagram.com/ar/419426756403911/"
          target="_blank"
          rel="noopener noreferrer"
           >Open AR experience</a>
         </div>
        
        <a
           href="https://www.instagram.com/sebyakin"
           target="_blank"
           rel="noopener noreferrer"
           >sebiakin</a>
        </div>
        </>
    )
}

export default Credits;
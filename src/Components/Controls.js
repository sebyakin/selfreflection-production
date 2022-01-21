import React, { useState, useEffect } from 'react'
import "../styles.scss";

function Controls({setFooter}) {

    const [isReady, setReady] = useState(false)

    useEffect( () => {
      
      setTimeout(() => 
        setReady(true), 6000
      )
      return () => {
        // тут то, что при анмаунте компонента
      }

    }, [isReady]) 


    return (
        <>
        <div className="controls">
          <div className="pill blink">
              {isReady ? 'Your virtual identity is ready' : 'We analysing your data and social graph using your browser’s cookies to adapt your experience...'}
          </div>

          {isReady ? 
          <div onClick={()=>setFooter(true)} className="pill button">Continue</div> 
          :
          <></>
          }
         </div>
        </>
    )
}

export default Controls;
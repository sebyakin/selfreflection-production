import "../styles.scss";
import { Suspense, useState } from "react";
import React, { useRef } from 'react'
import {Head} from './Head'  
import Title from "./Title";
import Text from "./Text";
import Controls from "./Controls";
import Predictions from "./Predictions";
import Credits from "./Credits";

function Content() {

    const [isFooter, setFooter] = useState(false)

    return (
    <>
        <div className='top'> 
        <Title />
        { isFooter ?  
          '' : 
          <Text />
        }
      </div>
      
      { isFooter ?  
          <div className="predictions">
            <Predictions />
          </div> : 
          ''
      }
      <div className='bottom'>
      { isFooter ? <Credits /> : <>
          <Controls setFooter={setFooter} /> 
      </>
      }
      </div>
      </>
    )
} 

export default Content;
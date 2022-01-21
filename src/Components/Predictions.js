import React, { useEffect, useState, useRef, useCallback } from "react";
const jingle = new Audio('../assets/low-jingle.mp3');


function Predictions() {

    const predictions = [
        'Security is one of your major goals in life.',
        'You like things we don’t understand',
        'You are selfish but you are right',
        'You can never be really happy because you know too much'
    ]

    const firstPrediction = Math.floor(Math.random()*predictions.length)

    const [currentPrediction, setCurrentPrediction] = useState(firstPrediction)
    const [isVisible, setIsVisble] = useState(false)
    const [isChanged, setChanged] = useState(false)

    useEffect(() => {
      const timer = setTimeout(function() {
        setIsVisble(true);
        jingle.play();
      }
      , 1000);
    }, []);

    useEffect(() => {
      const timer = setTimeout(function() {
        setIsVisble(false);
      }
      , 6000);
    }, []);
    

    const changePhrase = () => {
        
      setCurrentPrediction(Math.floor(Math.random()*predictions.length))
        jingle.play();
  
        // появление с первой фразой
        setIsVisble(true)

        // через 5 сек прячем
        setTimeout(() => {
            setIsVisble(false)
        }, 5000)

        // новая фраза
        setTimeout(() => {
            setCurrentPrediction(Math.floor(Math.random()*predictions.length))
            setChanged(true)
        }, 10000)
    }

    useInterval(() => {
        changePhrase()
      }, 10000);


    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest function.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

    return (
        <>
        <div className={isVisible ? 'pill bit visible' : 'pill bit'}>{predictions[currentPrediction]}</div>
        </>
    )
}

export default Predictions;



// useCallback(() => {
//     setInterval(() => {
//         setIsVisble(!isVisible)
//         setCurrentPrediction(Math.floor(Math.random()*predictions.length))
//         console.log('new task')
//     }, 2000)
// }, [])


  // useLayoutEffect(() => {
    //     clearInterval(timerId)
    // }, [isVisible])
    


    // let timerId = setInterval(() => {
    //     setIsVisble(!isVisible)
    //     setCurrentPrediction(Math.floor(Math.random()*predictions.length))
    //     console.log('new task')
    // }, 2000);

  
    // const firstPrediction = Math.floor(Math.random()*predictions.length)
    // const [currentPrediction, setCurrentPrediction] = useState(firstPrediction)
    // const [isVisible, setIsVisble] = useState(false)

    // <div className={isVisible ? 'pill bit visible' : 'pill bit'}>{predictions[currentPrediction]}</div>
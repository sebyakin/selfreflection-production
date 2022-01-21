import React, { useEffect, useState, useRef, useCallback } from "react";
const jingle = new Audio('../assets/low-jingle.mp3');


function Predictions() {

    const predictions = [
      'You have a great need for other people to like and admire you.',

      'You have a tendency to be critical of yourself.',
      
      'You have a great deal of unused capacity which you have not turne]d to your advantage.',
      
      'While you have some personality weaknesses, you are generally able to compensate for them.',
      
      'Disciplined and self-controlled outside, you tend to be worrisome and insecure inside.',
      
      'At times you have serious doubts as to whether you have made the right decision or done the right thing.',
      
      'You prefer a certain amount of change and variety and become dissatisfied when hemmed in by restrictions and limitations.',
      
      'You pride yourself as an independent thinker and do not accept others statements without satisfactory proof.',
      
      'You have found it unwise to be too frank in revealing yourself to others.',
      
      'At times you are extroverted, affable, sociable, while at other times you are introverted, wary, reserved.',
      
      'Some of your aspirations tend to be pretty unrealistic.',
      
      'Security is one of your major goals in life.',
      
      'You like things we don’t understand',
      
      'You are selfish but you are right',
      
      'You can never be really happy because you know too much',
      
      'Practice the radical way of forgetting in order to learn what is beautiful ',
      
      'Let people know what you really feel', 
      
      'The deeper you seek, the more is your wonder exiting',
      
      'Remember an atom can collide in order to produce another matter.',
      
      'You are doing what you were always to be doing.',
      
      'Step into the spotlight, even you usually always shay away from it',
      
      'Go to poetry not for wisdom, but for the dismantling of wisdom',
      
      'Your ambitious tendencies are especially intense right now, verging on bossiness. ',
      
      'Make use of your determination. Practice generosity.', 
      
      'The only way to fight shy of criticism is to do nothing, say nothing, be nothing',
      
      'Remember that habits, and not ideas, are the programming language of the human beings. ',
      
      'Reinforce the habits you use to structure, contain and control the chaos of daily life ', 
      
      'Right now the way you want to be appreciated and show appreciation is overly sentimental.', 
      
      'Just because it is easier to tell a story about how people wound one another, doesn’t mean you should',
      
      'Look out for a secret coming out, your intuition being shaky, or changes in how you think about your mental health.', 
      
      'The situation will be an earning experience if you let it teach you',
      
      'Your acquaintances and social connections demand considerable attention.', 
      
      'If anything, too many people have access to your state of mind',
      
      'Your intense tendencies are especially ardent right now, verging on brooding.', 
      
      'Patina is an act of oxidation. It may be hard to accept the unconscious ways you grow and progress right now',
      
      'If you are paying attention, you will detect challenges most profoundly in circumstances surrounding your identity',
      
      'The point of the character is the process of building it',
      
      'You have the choice to change in a way that aligns with who you really are and who you want to',
      
      'Existence is just an endless array of phenomena: joy, pain, pleasure, there is no other truth',
      
      'Balance delicacy and whims by thinking about the repercussions.', 
      
      'You are moving quickly. Be careful with hearts.',
      
      'Pay attention to your methods of inquiry',
      
      'Ignorance is not endearing',
      
      'Your relativist proclivities are impressive right now',
      
      'Revenge exists on the same plane as justice — fantasy.',
      
      'Your prevailing expansive tendencies are particularly productive right now',
      
      'Fictitious good is a platitude',
      
      'Real-life good is fresh and intoxicating. Your identity and ego are able to recognise this real-life good right now',
      
      'Improving your relationship with your self-esteem can have a drastic effect on your life for the better',
      
      'Your communication skills are especially acute right now',
      
      'you’ll notice this sense of ease most intensely in situations having to do with habits, routine, and health',
      
      'Your characteristic harmonious tendencies are particularly useful right now',
      
      'There’s an influx of opportunity coming your way, it’s up to you to decide what’s worth keeping and what to pass up',
      
      'Making trouble can be a reminder that you can also put things back in order',
      
      'It’s a good time for indulgence.',
      
      'Your diligent tendencies will be particularly useful right now',
      
      'Pay attention to where you focus your time',
      
      'Your emotional intensity is excessive right now',
      
      'You control what you say but not what the other people hear'
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
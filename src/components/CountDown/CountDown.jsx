import {useState, useRef, useEffect} from 'react'
import './countDown.css'

const CountDown = ({start, end}) => {
    const [countdown, setCountdown] = useState(null)
    const ref = useRef(start)

    const accumulator = (start - end) / 200

    const updateCounterState = () => {
        if(ref.current > end) {
          const result = Math.floor(ref.current - accumulator)
          if(result < end) return setCountdown(end)
    
          setCountdown(result)
          ref.current = result
        }
    
        setTimeout(updateCounterState, 5)
      }

      useEffect(() => {
        let isMounted = true;
        if(isMounted) {
          updateCounterState()
        }
        return () => (isMounted = false);
      },[end, start])


  return (
    <div className='counterdown'>$ {countdown}</div>
  )
}

export default CountDown
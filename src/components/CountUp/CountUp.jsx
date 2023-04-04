import {useState, useRef, useEffect} from 'react'
import './countUp.css'

const CountUp = ({start, end}) => {
  const [countup, setCountup] = useState(null)
  const ref = useRef(start)

  const accumulator = end / 200

  const updateCounterState = () => {
      if(ref.current < end ) {
        const result = Math.ceil(ref.current + accumulator)
        if(result > end) return setCountup(end)
    
        setCountup(result)
        ref.current = result
      }

      setTimeout(updateCounterState, 11)
  }

  useEffect(() => {
    let isMounted = true;
    if(isMounted) {
      updateCounterState()
    }
    return () => (isMounted = false);
  },[end, start])

  return (
    <div className='counterup'>
        $ {countup}
    </div>
  )
}

export default CountUp
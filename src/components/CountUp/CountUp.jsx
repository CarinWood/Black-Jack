import {useState, useRef, useEffect} from 'react'

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
    <div>
        {countup}
    </div>
  )
}

export default CountUp
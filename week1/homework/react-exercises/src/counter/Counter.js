import React, { useState } from 'react'
import Button from './Button'
import Count from './Count'

const Counter = () => {
  const [count, setCount] = useState(0)
  const feedback = count > 10 ? "It's Higher Than 10" : 'Keep counting...'

  return (
    <div className="counter">
      <h2>{feedback}</h2>
      <Button onClickHandler={() => setCount(count + 1)} />
      <Count count={count} />
    </div>
  )
}

export default Counter
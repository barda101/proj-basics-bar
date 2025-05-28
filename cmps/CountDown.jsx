const { useState, useEffect } = React

export function CountDown( { startFrom, onDone }) {
  //return <h1>Test</h1>
  
  const [ count, setCount ] = useState(startFrom)

  useEffect(() => {
    if (count <= 0) {
      onDone()
      return
    }
    
    const intervalId = setInterval(() => {
      setCount (cnt => cnt -1)
    }, 1000)
    console.log(intervalId)
    
    return () => clearInterval(intervalId)
  }, [count, onDone])

  function counterStyle() {
    const classList = ['count-down-box']
    if (count <= 6) classList.push('red')

    return classList.join(' ')
  }

  return (
    <div className={counterStyle()}>
      {count}
    </div>
  )

}
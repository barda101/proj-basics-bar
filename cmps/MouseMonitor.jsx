const { useState, useEffect } = React

export function MouseMonitor () {
  //return <h1>Test</h1>
  const [isOn, setIsOn] = useState(true)
  const [pos, setPos] = useState({x: 0, y: 0})

  function updatePos(e) {
    setPos({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    if (isOn) {
      document.addEventListener('mousemove', updatePos)
    } else {
      document.removeEventListener('mousemove', updatePos)
    }
    return () => document.removeEventListener('mousemove', updatePos)
  }, [isOn])
    

  function toggleStatus() {
    setIsOn(val => ! val)
  }

  return (
    <div className="mouse-monitor">
      <h3>Mouse Monitor</h3>
      {isOn && <p>x: {pos.x}, y: {pos.y}</p>}
      <button onClick={toggleStatus}>
        {isOn ? 'Pause' : 'Resume'}
      </button>
    </div>
  )
}
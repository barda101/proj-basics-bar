const { useState, useEffect  } = React

export function SeasonClock( {darkMode = false} ) {
  const [ isDark, setIsDark ] = useState(darkMode)
  const [date, setDate] = useState(new Date())
  
  const day = date.toLocaleString('default', { weekday: 'long' })
  const month = date.toLocaleString('default', { month: 'long' })

useEffect(() => {
  const intervalId = setInterval(() => {
    setDate(new Date())
  }, 1000)
  return () => clearInterval(intervalId)
}, [])

  function getSeason(monthNum) {
    if (monthNum === 11 || monthNum === 0 || monthNum === 1) return 'Winter'
    if (monthNum >= 2 && monthNum <= 4) return 'Spring'
    if (monthNum >= 5 && monthNum <= 7) return 'Summer'
    return 'Fall'
  }

  function toggleDarkMode() {
    setIsDark(isDark => !isDark)
  }
  
  function counterStyle() {
    const classList = ['season-box']
    if (isDark) classList.push('dark')

    return classList.join(' ')
  }

    return (
      <div onClick={toggleDarkMode} className={counterStyle()}>
        <section>
          <h2>{month} ({getSeason(date.getMonth())})</h2>
          <img src={`./public/img/${getSeason(date.getMonth()).toLowerCase()}.png`} alt="Season" />
          <h3>{day}</h3>
          <h4>{date.toLocaleTimeString()}</h4> {/* live clock */}
        </section>
      </div>

    )
}
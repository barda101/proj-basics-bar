const { useState } = React

import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { AnimalList } from "./cmps/AnimalList.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"
import { CountDown } from "./cmps/CountDown.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"


const animalInfos = [ 
    {type: 'Malayan Tiger', count: 787}, {type: 'Mountain Gorilla', count: 212}, {type: 'Fin Whale', count: 28}, 
]

export function RootCmp() {
    const [ route, setRoute ] = useState('AnimalList')
    return (
        <section className="app main-layout">
            <header className="menu-header">
                {/* <h1>App</h1> */}
                <nav>
                <a onClick={() => setRoute('AnimalList')} href="#">Animal List</a>
                <a onClick={() => setRoute('SeasonClock')} href="#">Season Clock</a>
                <a onClick={() => setRoute('CountDown')} href="#">Count Down</a>
                <a onClick={() => setRoute('MouseMonitor')} href="#">Mouse Monitor</a>                      
                </nav>
            </header>
            <AppHeader />
            <main>
                {/* <Home /> */}
                {route === "AnimalList" && <AnimalList animalInfos={animalInfos} />}
                {route === "SeasonClock" && <SeasonClock />}
                {route === "CountDown" && <CountDown startFrom={10} onDone={()=>{ console.log('Done!') }} />}
                {route === "MouseMonitor" && <MouseMonitor />}
                {/* <SeasonClock />
                <CountDown startFrom={10} onDone={()=>{ console.log('Done!') }} />
                <MouseMonitor /> */}
            </main>
        </section>
    )
}
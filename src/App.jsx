import Hero from './modules/Hero'
import Tech from './modules/Tech'
import Slider from './modules/Slider'
import Summary from './modules/Summary'
import Javascript from './modules/Javascript'
import Lamp from './modules/Lamp'
import Wordpress from './modules/Wordpress'
import Skills from './modules/Skills'

import Footer from './modules/Footer'

const App = () => {
  return (
    <div>
      <main>
      {Hero} 
      {Summary}

        <div className="section__wrapper">

          {Tech}
          {Slider}
        </div>
          {Javascript}
          {Lamp}
          {Wordpress}
          {Skills}
      </main>
      {Footer}
    </div>
  )
}

export default App;
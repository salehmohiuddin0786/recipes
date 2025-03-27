import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
import Recipes from './Pages/Recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      {/* <Content /> */}
      <Recipes/>

      <Footer />
  
        
    </>
  )
}

export default App

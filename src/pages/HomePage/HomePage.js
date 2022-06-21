import AboutUs from './AboutUs/AboutUs'
import Contact from './Contact/Contact'
import Info from './Info/Info'
import MainProducts from './MainProducts/MainProducts'

export default function HomePage() {
  return (
    <div>
        <h3>HomePage</h3>
        <Info />
        <MainProducts /> 
        <AboutUs />
        <Contact />
    </div>
  )
}

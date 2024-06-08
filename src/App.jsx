import { useSelector } from "react-redux"
import Navbar from "./components/NavBar"
import Page from "./pages/Page"
import './App.css'

const App = () => {
  const select = useSelector(state=>state.theme.isDarkMode)
  return (
    <div className={select ? 'darks' : 'lights'} >
      <Navbar />
       
      <Page/>
    </div>
  )
}

export default App
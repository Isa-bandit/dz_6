import { useSelector } from "react-redux"
import '../App.css'


const Page = () => {
  const  selector = useSelector(state=>state.theme.isDarkMode)
  return (
    <div className={ selector ? 'dark':'light'}>
        Hello
    </div>
  )
}

export default Page
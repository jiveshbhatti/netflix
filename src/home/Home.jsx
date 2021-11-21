import './home.scss'

import { Navbar } from '../components/navbar/Navbar'
import Featured  from '../components/featured/Featured'


export const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <Featured type='series'/>
        </div>
    )
}

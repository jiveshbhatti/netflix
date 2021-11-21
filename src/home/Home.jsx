import './home.scss'
import { AcUnit } from '@material-ui/icons'
import { Navbar } from '../components/navbar/Navbar'
export const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <img src="https://www.joblo.com/wp-content/uploads/2021/08/dog-movie-poster.jpg" alt="" />
        </div>
    )
}

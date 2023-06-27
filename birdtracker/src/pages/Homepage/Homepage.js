import './Homepage.scss'
import tracker from '../../assets/icons/icons8-gps-64.png'
import bucket from '../../assets/icons/icons8-bucket-64.png'
import goal from '../../assets/icons/icons8-goal-64.png'
import Carousel from '../../components/Carousel/Carousel'
import { birds } from '../../components/Data/Data'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <main className='homepage'>
            <div className='homepage__wrapper'>
                <Link to={'/birdtracker'} className='homepage__link'>
                    <div className='homepage__container'>
                        <img src={tracker} alt='birdtracker icon' className='homepage__icon' />
                        <h2 className='homepage__heading'>BirdTracker</h2>
                    </div>
                </Link>
                <div className='homepage__container'>
                    <img src={bucket} alt='bucketlist icon' className='homepage__icon' />
                    <h2 className='homepage__heading'>Bucketlist</h2>
                </div>
                <div className='homepage__container'>
                    <img src={goal} alt='achievements icon' className='homepage__icon' />
                    <h2 className='homepage__heading'>Achievements</h2>
                </div>
            </div>
            <Carousel images={birds} />
        </main>
    )
}
export default Homepage
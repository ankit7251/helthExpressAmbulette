
import HeroHome from '../components/home/heroHome'
import HomeServices from '../components/home/HomeServices'
import HomeTransportation from '../components/home/HomeTransportation'
import HomeSchedule from '../components/home/HomeSchedule'
import HomeACTPrivate from '../components/home/HomeACTPrivate'
import HomeAsq from '../components/home/HomeAsq'
import HomeServiceReviews from '../components/home/HomeServiceReviews'
import HomeLocationMap from '../components/home/HomeLocationMap'

const Home = () => {



    return (
        <>
            <HeroHome />
            <HomeServices />
            <HomeTransportation />
            <HomeSchedule />
            <HomeACTPrivate />
            <HomeAsq />
            {/* <HomeServiceReviews /> */}
            <HomeLocationMap />
        </>
    )
}

export default Home

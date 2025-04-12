import React from 'react'
import HomeAsq from '../components/home/HomeAsq'
import HomeSchedule from '../components/home/HomeSchedule'
// import ReviewsSection from '../components/asq/ReviewsSection'
import HomeLocationMap from '../components/home/HomeLocationMap'

const FAQ = () => {
    return (
        <>
            <HomeAsq />
            <HomeSchedule />
            {/* <ReviewsSection /> */}
            <HomeLocationMap />
        </>
    )
}

export default FAQ

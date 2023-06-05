import React from 'react'
import Nav from './Nav'
import '../styles/landing.css'
import Videos from './Videos'

const landing = () => {
    return (
        <div className='landing'>
            <Nav/>
            <Videos/>
        </div>
    )
}

export default landing
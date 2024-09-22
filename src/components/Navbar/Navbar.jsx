'use client'
import React from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import LgNavbar from './LgNavbar'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    const { width: windowWidth } = useWindowSize()
    return (
        <>
            {
                windowWidth >= 960 ? <LgNavbar /> : <MobileMenu />
            }
        </>
    )
}

export default Navbar

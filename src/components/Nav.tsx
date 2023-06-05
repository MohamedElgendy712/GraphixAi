import React, { useRef, useState } from 'react'
import Stack from '@mui/material/Stack/Stack'
import {IoMdMenu} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'


const Nav = () => {
    const [menu , setMenu] = useState(true);
    const menuRef = useRef(null);

    const handleMenuClick = () => {
        setMenu(!menu)
        
            if (menu) menuRef.current.style.transform = "translateX(0%)"
            else { menuRef.current.style.transform = "translateX(105%)" }
        
    }

    return (
        <div className='nav'>
            <Stack direction='row'  justifyContent={'space-between'} alignItems={"center"}>
                <p className='logo'>GraphixAi</p>

                <div className='desktop-nav'>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <button className="login-btn">Log in</button>
                        <button className='get-started-btn purple-btn'>Get Started</button>
                    </Stack>
                </div>

                <div className='mobile-nav'>
                    <IoMdMenu color='#5727E7' fontSize={"45px"} cursor={"pointer"} onClick={() => handleMenuClick()}/>
                    <div className='menu' ref={menuRef}>
                        <div className='logo-container'>
                            <p className='logo'>GraphixAi</p>
                            <AiOutlineClose className='close-icon' color='#5727E7' fontSize={"24px"} cursor={"pointer"} onClick={() => handleMenuClick()}/>
                        </div>
                        <ul>
                            <li>Features</li>
                            <li>Languages</li>
                            <li>Use Cases</li>
                            <li>Reviews</li>
                            <li>Pricing</li>
                            <li>FAQ's</li>
                        </ul>
                        <Stack spacing={2}>
                            <button className="login-btn">Log in</button>
                            <button className='get-started-btn purple-btn'>Get Started</button>
                        </Stack>
                    </div>
                </div>

            </Stack>
        </div>

        
    )
}

export default Nav
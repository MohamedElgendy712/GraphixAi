import React from 'react'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack/Stack'
import {IoMdMenu} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'


const Nav = () => {

    return (
        <div className='nav'>
            <Stack direction='row'  justifyContent={'space-between'} alignItems={"center"}>
                <p className='logo'>GraphixAi</p>

                <div className='desktop-nav'>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Button className='login-btn' variant='contained' size='medium' disableElevation>Log in</Button>
                        <Button className='get-started-btn' variant='contained' size='medium' disableElevation>Get started</Button>
                    </Stack>
                </div>

                <div className='mobile-nav'>
                    <IoMdMenu color='#5727E7' fontSize={"45px"} cursor={"pointer"}/>
                    <div className='menu'>

                    </div>
                </div>

            </Stack>
        </div>

        
    )
}

export default Nav
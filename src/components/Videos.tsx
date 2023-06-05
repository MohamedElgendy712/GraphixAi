import React from 'react'
import {Button} from "@mui/material"
import Stack from '@mui/material/Stack/Stack'
import {TbPlayerPlayFilled} from "react-icons/tb"



const Videos = () => {
    return (
        <div className='videos'>
            <div className='heading'>
                <Stack textAlign={'center'}>
                    <p>Translate your</p>
                    <p>videos <span>with AI</span></p>
                    <p>Make your content multilingual in seconds and reach people worldwide</p>
                    <Button className='btn' variant='contained' size='medium' disableElevation >Get  Started, it’s Free</Button>
                </Stack>
            </div>
            <div className='video-container'>
                <Stack spacing={2} direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <div className='video-player'>
                        <div className="circle">
                            <TbPlayerPlayFilled className='player-icon' fontSize={"44px"} color='#5727E7'/>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className="card">
                            <div className='flag'></div>
                            <div className='language'>
                                <p>English</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className='flag'></div>
                            <div className='language'>
                                <p>Spanish</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className='flag'></div>
                            <div className='language'>
                                <p>Mandarin</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                    </div>
                </Stack>
            </div>
        </div>
    )
}

export default Videos
import React, {useState} from 'react'
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import Background from '../../assets/images/restaurant_bg.png'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg src={Background}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Find the best restaurant for you</HeroH1>
                <HeroP>Just answer the questions provided
                    and the app will choose the most suitable
                    restaurant based on your preferences.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signin" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
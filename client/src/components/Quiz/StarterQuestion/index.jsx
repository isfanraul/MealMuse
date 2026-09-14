import React from 'react'
import Typewriter from "typewriter-effect";
import { StarterText, Button1, ButtonContainer } from './StarterElements';


const StarterQuestion = () => {
  return (
    <>
      <StarterText>
        <Typewriter 
          onInit={(typewriter)=> {
          typewriter
          .typeString("Do you eat meat?")
          .start();
          }}
        />
      <ButtonContainer>
        <Button1 href="/meattype">Yes</Button1>
        <Button1 href="/vegdiet">No</Button1>
      </ButtonContainer>
      </StarterText>
    </>
  )
}

export default StarterQuestion
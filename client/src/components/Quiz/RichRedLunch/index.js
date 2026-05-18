import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../RichRedLunch/RichRedLunchElements'

const RichRedLunch = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/rrl1" style={{'animation-delay':'0.14s'}}>Salad</Button1>
          <Button1 href="/rrl2" style={{'animation-delay':'0.28s'}}>Soup</Button1>
          <Button1 href="/rrl3" style={{'animation-delay':'0.42s'}}>Burger</Button1>
          <Button1 href="/rrl4" style={{'animation-delay':'0.63s'}}>Schnitzel</Button1>
          <Button1 href="/rrl5" style={{'animation-delay':'0.70s'}}>Asian Food</Button1>
          <Button1 href="/rrl6" style={{'animation-delay':'0.70s'}}>Mexican Food</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichRedLunch
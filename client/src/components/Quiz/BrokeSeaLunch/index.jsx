import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeSeaLunch/BrokeSeaLunchElements'

const BrokeSeaLunch = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/bsl1" style={{'animation-delay':'0.14s'}}>Salad</Button1>
          <Button1 href="/bsl2" style={{'animation-delay':'0.42s'}}>Burger</Button1>
          <Button1 href="/bsl3" style={{'animation-delay':'0.42s'}}>Supa</Button1>
          <Button1 href="/bsl4" style={{'animation-delay':'0.70s'}}>Sushi</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeSeaLunch
import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BrokeSeaBreakElements'

const BrokeSeaBreak = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/bsb1">Scrambled eggs</Button1>
          <Button1 href="/bsb2">Omelette</Button1>
          <Button1 href="/bsb3">BREAKFAST WRAP</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeSeaBreak
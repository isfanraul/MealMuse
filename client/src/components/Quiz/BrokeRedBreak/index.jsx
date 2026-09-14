import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BrokeRedBreakElements'

const BrokeRedBreak = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these breakfast foods do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brb1">SAUSAGE</Button1>
          <Button1 href="/brb2">BACON</Button1>
          <Button1 href="/brb3">BREAKFAST SANDWICH</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokeRedBreak
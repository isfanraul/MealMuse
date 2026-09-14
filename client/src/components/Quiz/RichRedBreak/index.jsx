import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './RichRedBreakElements'

const RichRedBreak = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these breakfast foods do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/rrb1">SAUSAGE</Button1>
          <Button1 href="/rrb2">BACON</Button1>
          <Button1 href="/rrb3">BREAKFAST SANDWICH</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichRedBreak
import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './RichSeaBreakElements'

const RichSeaBreak = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/rsb1">Scrambled eggs</Button1>
          <Button1 href="/rsb2">Omelette</Button1>
          <Button1 href="/rsb3">BREAKFAST WRAP</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichSeaBreak
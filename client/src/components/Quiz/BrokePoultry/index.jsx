import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from './BrokePoultryElements'

const BrokePoultry = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokepoultrybreak">Breakfast</Button1>
          <Button1 href="/brokepoultrylunch">Lunch</Button1>
          <Button1 href="/brokepoultrydinner">Dinner</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default BrokePoultry
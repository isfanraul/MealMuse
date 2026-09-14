import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1} from './RichPoultryElements'

const RichPoultry = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>What meal are we talking about?</Texth1>
        <ButtonWrapper>
          <Button1 href="/richpoultrybreak">Breakfast</Button1>
          <Button1 href="/richpoultrylunch">Lunch</Button1>
          <Button1 href="/richpoultrydinner">Dinner</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichPoultry
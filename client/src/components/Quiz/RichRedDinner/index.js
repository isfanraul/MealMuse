import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeRedDinner/BrokeRedDinnerElements'

const RichRedDinner= () => {
  return (
    <>
      <PageWrapper>
        <Texth1 data-heading="Which of these dishes do you prefer?">Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/rrd1">Pizza</Button1>
          <Button1 href="/rrd2">Pasta</Button1>
          <Button1 href="/rrd3">Shaorma</Button1>
          <Button1 href="/rrd4">Asian Food</Button1>
          <Button1 href="/rrd5">Mexican Food</Button1>
          <Button1 href="/rrd6">Kebab</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichRedDinner
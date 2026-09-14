import styled from 'styled-components'

export const BudgetWrapper = styled.div`
  background-color: #0099ff;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content:center;
  align-items:center;
  min-height:100vh;

`

export const Texth1 = styled.h1`
  font-family: 'Baloo Tamma', cursive;
  text-align: center;
  color: #fff;
  font-size: 80px;
  letter-spacing: 5px;
  
  text-shadow: -1px -1px 0px #0099ff,
    3px 3px 0px #0099ff,
    6px 6px 0px #006bb3;
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
  align-items: center;
`

export const Button1 = styled.a`
  padding: 20px 40px;
  border-radius: 8px;
  margin: 0 15px;
  transition: all .5s ease;
  color: #fff;
  border: 3px solid white;
  font-family:'Montserrat', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  font-size: 17px;
  background-color : transparent;
  outline: none;
  &:hover {
    color: #001F3F;
    background-color: #fff;
  }
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }
`
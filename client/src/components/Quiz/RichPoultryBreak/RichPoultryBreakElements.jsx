import styled from 'styled-components'

export const PageWrapper = styled.div`
  background-color: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content:center;
  align-items:center;
  min-height:100vh;
`

export const Texth1 = styled.h1`
  position: relative;
  font-size: 80px;
  &:before {
    content: "";
    position: absolute;
    left: 47%;
    bottom: 7px;
    width: 1250px;
    height: 20px;
    transform: skew(-12deg) translateX(-50%);
    background: rgba(238,111,87,0.5);
    z-index: -1;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 10vh;
  justify-content: center;
  align-items: center;

`

export const Button1 = styled.a`
  padding: 25px 40px;
  border-radius: 8px;
  margin: 0 15px;
  color: #000;
  outline: 0;
  grid-gap: 8px;
  align-items: center;     
  
  outline: 0;
  text-align: center;
  cursor: pointer;
  height: 34px;
  color: #fff;
  vertical-align: top;
  border-radius: 3px;
  border: 1px solid transparent;
  transition: all .3s ease;
  background: #cc4d29;
  border-color: #cc4d29;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1px;
  font-size: 15px;
  &:hover {
      background: #e4461b;
      border-color: #e4461b;
  }
                
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }
`
import styled, { keyframes } from 'styled-components'

export const PageWrapper = styled.div`
  background-color: #222;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content:center;
  align-items:center;
  min-height:100vh;
`

export const Texth1 = styled.h1`
  color:#fff;
  font-family: 'Josefin Sans';
  font-weight: 100;
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
  min-height: 15vh;
  justify-content: center;
  align-items: center;

`

const bouncy = keyframes`
  0%{top:0em}
  40%{top:0em}
  43%{top:-0.9em}
  46%{top:0em}
  48%{top:-0.4em}
  50%{top:0em}
  100%{top:0em;}
`

export const Button1 = styled.a`
  color:#fff;
  display:inline-block;
  padding: 20px 40px;
  border-radius: 8px;
  border:0.1em solid #fff; 
  margin:0 0.5em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  text-align:center;
  transition: all 0.2s;
  animation:${bouncy} 5s infinite linear;
  position:relative;

  &:hover{
  color:#000000;
  background-color:#FFFFFF;
}
                
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }
`
import styled, { keyframes } from 'styled-components'


const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

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
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${hue} 10s infinite linear;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 80px;
  font-weight: 700;
  line-height: 110px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
 
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
  color: #000;
  outline: 0;
  grid-gap: 8px;
  align-items: center;
  background: 0 0;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-size: 16px;
  gap: 8px;
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all .14s ease-out;
  white-space: nowrap;
  &:hover {
      box-shadow: 4px 4px 0 #000;
      transform: translate(-4px,-4px);
  }
  &:focus-visible{
      outline-offset: 1px;
  }         
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }
`
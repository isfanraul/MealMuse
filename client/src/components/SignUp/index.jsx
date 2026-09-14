import React, { useState } from "react";
import {
  Container,
  Form,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
  Icon,
  FormButton,
  SigninLink,
} from "./SignUpElements";
import Background from "../../assets/images/restaurant_bg.png";
import { HeroBg, ImageBg } from "../HeroSection/HeroElements";
import Axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:3001";

const SignUp = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [status, setStatus] = useState("");

  const register = (event) => {
    event.preventDefault();
    Axios.post(`${API}/register`, {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      // handle success/failure
      if (response.data && response.data.success) {
        setStatus("Account created. You can sign in now.");
      }
    }).catch((error) => {
      setStatus(error.response?.data?.error || "Unable to create the account.");
    });
  };

  return (
    <>
      <HeroBg>
        <ImageBg src={Background} />
      </HeroBg>
      <Container>
        <FormWrap>
          <Icon to="/">MealMuse</Icon>
          <FormContent>
            <Form onSubmit={register}>
              <FormH1>Create your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              />
              {/* <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                            <FormInput type='password' required/> */}
              <FormButton type="submit">
                Continue
              </FormButton>
              {status && <Text>{status}</Text>}
              <Text>
                Already have an Account?
                <SigninLink id="Links-signin" to="/signin">
                  Sign In
                </SigninLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

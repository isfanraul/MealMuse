import React, { useEffect, useState } from "react";
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
} from "./SignInElements";
import { Button } from "../ButtonElement";
import Background from '../../assets/images/restaurant_bg.png'
import { HeroBg, ImageBg } from "../HeroSection/HeroElements";
import Axios from "axios";
const API = process.env.REACT_APP_API_URL || "http://localhost:3001";

const SignIn = () => {
    const [SignInStatus, setSignInStatus] = useState("");
    const [Redirect, setRedirect] = useState("false");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get(`${API}/login`).then((response) => {
            if(response.data.loggedIn == true){
                setSignInStatus(response.data.user[0].username);
                setRedirect("true");
            }
        });
    }, [])

    const login = () => {
        Axios.post(`${API}/login`, {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setSignInStatus(response.data.message);
            } else {
                setSignInStatus(response.data[0].username);
            }
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
                        {Redirect== "false"&&
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput
                                type="email"
                                required
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput
                                type="password"
                                required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <FormButton onClick={login} type="submit">
                                Continue
                            </FormButton>
                            {Redirect== "true" &&
                            <Text>
                                Hello {SignInStatus}! You are logged in!
                            </Text>}
                            {Redirect== "true" &&
                            <Button
                                to="/starterquestion"
                                primary="true"
                                dark="true"
                            >Get Started
                            </Button> }
                        </Form> }
                        {Redirect== "true"&&
                        <Form action="#">
                            <FormH1>Hello {SignInStatus}! You are logged in!</FormH1>
                            {Redirect== "true" &&
                            <Button
                                to="/starterquestion"
                                primary="true"
                                dark="true"
                            >Get Started
                            </Button> }
                        </Form> }
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;

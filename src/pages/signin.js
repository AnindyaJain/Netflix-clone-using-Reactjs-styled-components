import React, { useState, useContext } from "react";
import {useHistory} from 'react-router-dom';
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components/form";
import * as ROUTES from '../constants/routes';
import {FirebaseContext} from '../context/firebase';

export default function Signin() {

    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const isInValid = password === '' || emailAddress === '';
    
    const handleSignIn = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(()=>{
                history.push(ROUTES.BROWSE);
            })
            .catch((error)=>{
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }


    return (
        <>
        <HeaderContainer>
            <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignIn} method="POST">
                <Form.Input
                placeholder="Email or phone number"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Form.Input
                type="password"
                placeholder="password"
                value={password}
                autoComplete="off"
                onChange={( {target} ) => setPassword(target.value)}
                />
                <Form.Submit type="submit" disabled={isInValid}>Sign In</Form.Submit>
                {/* <Form.Input type="checkbox" id="remember" name="remember" />
                    <label for="remember">Remember me</label> */}
                </Form.Base>
                    <Form.Text>New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>.</Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to<br />ensure you're not a bot.
                        <Form.Link style={{ color: "#0645AD"}}> Learn more.</Form.Link>
                    </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}

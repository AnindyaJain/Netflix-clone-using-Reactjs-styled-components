import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components/form";
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    
    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    const handleSignUp = (event) => {
        event.preventDefault();
        return firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result)=> 
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    })
            )            
            .catch((error)=> {
                setPassword('');
                setEmailAddress('');
                setFirstName('');
                setError(error.message);
            });
    };

    return <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignUp} method="POST">
                    <Form.Input type="text" placeholder="username" value={firstName}
                        onChange={({target})=> setFirstName(target.value)} />
                    <Form.Input type="text" placeholder="Email or phone number" value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value)} />
                    <Form.Input type="password" placeholder="password" value={password}
                        onChange={({target}) => setPassword(target.value)} autoComplete="off" />
                    <Form.Submit type="submit" disabled={isInvalid}>Sign Up</Form.Submit>
                </Form.Base>
                
                <Form.Text>Already a User? <Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>.</Form.Text>
                <Form.TextSmall>This page is protected by Google reCAPTCHA to<br />ensure you're not a bot.
                        <Form.Link style={{ color: "#0645AD" }}> Learn more.</Form.Link>
                </Form.TextSmall>
            </Form>    
        </HeaderContainer>
        <FooterContainer />
    </>
}

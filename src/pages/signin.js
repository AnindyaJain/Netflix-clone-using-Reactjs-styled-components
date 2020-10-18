import React, {useState} from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import {Form} from '../components/form'
export default function Signin() {
    return (
    <>
        <HeaderContainer></HeaderContainer>
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignIn} method="POST">
                <Form.Input type='text' placeholder="Email or phone number" onChange=

            </Form.Base>
        </Form>
        <FooterContainer />
    </>
    );
}

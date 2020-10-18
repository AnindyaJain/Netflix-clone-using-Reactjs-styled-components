import React from 'react'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import {OptForm} from '../components/opt-form'
import {Features} from '../components/features'


export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {/* <Features>
            <Features.Title>
                100% entertainment.
                <br />
                Pay for 1 month, get 1 month free.
            </Features.Title>
            <Features.SubTitle>Watch anywhere. Cancel anytime.</Features.SubTitle>
            <OptForm>
                <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership
                </OptForm.Text>
                <OptForm.Break />
                <OptForm.Frame>
                <OptForm.Input placeholder="Enter address" />
                <OptForm.Button>Get 1 month free</OptForm.Button>
                </OptForm.Frame>
            </OptForm>
            <Features.Text>Only new members are eligible for this offer.</Features.Text>
            </Features> */}
            {children}
        </Header>
    );
}
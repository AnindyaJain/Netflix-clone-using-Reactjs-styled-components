import React from 'react';
import {JumbotronContainer} from '../containers/jumbatron';
import {FaqsContainer} from '../containers/faqs';
import {FooterContainer} from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import {OptForm} from '../components/opt-form'
import {Features} from '../components/features'

export default function Home() {
    return (
    <>
        <HeaderContainer>
            <Features>
                <Features.Title>
                100% entertainment.
                <br />
                Pay for 1 month, get 1 month free.
                </Features.Title>
                <Features.SubTitle>
                Watch anywhere. Cancel anytime.
                </Features.SubTitle>
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
                <Features.Text>
                Only new members are eligible for this offer.
                </Features.Text>
            </Features>
        </HeaderContainer>

        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
    </>
    );
}
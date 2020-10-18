import React from 'react';
import {Accordion} from '../components/accordion';
import faqsData from '../fixtures/faqs.json';
import { OptForm } from '../components/opt-form';



export function FaqsContainer () {
    return (
        <Accordion>
            <Accordion.Frame>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion.Frame>
            <OptForm>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your
                    membership
                </OptForm.Text>
                <OptForm.Break />
                <OptForm.Frame>
                    <OptForm.Input placeholder="Enter address" />
                    <OptForm.Button>GET STARTED</OptForm.Button>
                </OptForm.Frame>
            </OptForm>
        </Accordion>
    );
}
import React from 'react';
import {Container, Title, SubTitle, Text} from './styles/features'

export function Features ({children, ...restProps}) {
    return <Container {...restProps}>
        {children}
    </Container>
}

Features.Title = function FeaturesTitle ({children, ...restProps}) {
return <Title {...restProps}>{children}</Title>
}

Features.SubTitle = function FeaturesSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Features.Text = function FeaturesText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}
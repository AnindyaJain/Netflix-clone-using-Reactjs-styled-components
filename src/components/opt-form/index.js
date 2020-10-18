import React from 'react';
import {Container, Input, Button, Text, Break, Frame} from './styles/opt-form'

export function OptForm ({children, ...restProps}){
    return <Container {...restProps}>
                {children}
            </Container>
}

OptForm.Input = function OptFormInput ({children, ...restProps}) {
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return <Button {...restProps}>
                {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
            </Button>;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
    return <Break {...restProps}>{children}</Break>;
};

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
    return <Break {...restProps}>{children}</Break>;
};

OptForm.Frame = function OptFormFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

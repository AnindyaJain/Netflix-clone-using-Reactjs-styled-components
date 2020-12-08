import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom'
import { Container, Error, Base, Title, Text, TextSmall, Input, Submit, Link } from './styles/form'

export function Form ({children, ...restProps}) {
    return <Container {...restProps}>
        {children}
    </Container>
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
};

Form.Base = function FormBase({children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
};

Form.Submit = function FormSubmit({children, ...restProps}) {
return <Submit {...restProps}>{children}</Submit>
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
};

// Form.Link = function FormLink({ children, to, ...restProps }) {
    
//     return <ReactRouterLink to={to}>
//         <Link {...restProps}>{children}</Link>
//     </ReactRouterLink>
    
// };

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

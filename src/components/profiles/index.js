import React from 'react'
import { Title, List, Item, Picture, Name, Container } from './styles/profiles'


export function Profiles ({children, ...restProps}) {
    return <Container {...restProps}>
            {children}
        </Container>
}

Profiles.Title = function ProfilesTitle ({children, ...restProps}) {
    return <Title {...restProps}>{ children }</Title>
};
Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};
Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};
Profiles.Picture = function ProfilesPicture(src, { ...restProps }) {
    return  <Picture {...restProps} src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZiSyrRci77umHuATdA0OCHdMx0Bb2mWhVc0ihermsQZehGuoO-ugrnHy8u8EoOh5NoAIDZTs4DzBgQKUJ8_GMvr3y4R.png?r=a41"
                        alt="img" />
    
    
    // <Picture
    //         {...restProps}
    //         src={
    //         src
    //             ? `/images/users/${src}.png`
    //             : '/images/misc/loading.gif'
    //         }
    //     />
};
Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>;
};
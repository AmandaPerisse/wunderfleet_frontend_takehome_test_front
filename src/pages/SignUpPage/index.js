import React from 'react';
import Form from './Form';
import styled from 'styled-components';

export default function SignUpPage() {

    return (
        <Content>
            <TopDiv>
                <h1>
                    Insert Personal Information
                </h1>
            </TopDiv>
            <View>
                <Form />
            </View>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 70%;
`;
const TopDiv = styled.body`
    background-color: #000D36;
    padding: 20px;
    width: 100%;
    h1{
        color: white;
    }
`;
const View = styled.div`
    width: 100%;
    padding: 20px;
    background-color: white;
`;
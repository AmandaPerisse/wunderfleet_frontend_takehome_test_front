import React from 'react';
import Form from './Form';
import styled from 'styled-components';

export default function SignUpPage( { pageNumber } ) {

    let content = 'personal';

    if(pageNumber === 1){
        content = 'personal';
    }
    else if(pageNumber === 2){
        content = 'address';
    }
    else{
        content = 'payment';
    }

    return (
        <Content>
            <TopDiv>
                <h2>
                    Insert {content} Information
                </h2>
            </TopDiv>
            <View>
                <Form pageNumber = {pageNumber}/>
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
const TopDiv = styled.div`
    background-color: #000D36;
    padding: 20px;
    width: 100%;
    h2{
        color: white;
    }
`;
const View = styled.div`
    width: 100%;
    padding: 20px;
    background-color: white;
`;
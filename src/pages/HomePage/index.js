import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

export default function HomePage() {

    const navigate = useNavigate();
    
    function handleButtonStart(){

        const firstname = JSON.parse(localStorage.getItem('firstname'));
        const street = JSON.parse(localStorage.getItem('street'));
        if(firstname){
            navigate('/address');
        }
        else if(street){
            navigate('/payment');
        }
        else{
            navigate('/signUp');
        }
        
    }

    return (
        <Content>
            <h1>
                Welcome to my test!
            </h1>
            <br />
            <h2>
                Hope you enjoy it :)
            </h2>
            <br />
            <Button onClick={handleButtonStart}>
                <h3>Start</h3>
            </Button>
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
    h1{
        color white;
    }
    h2{
        color: white;
    }
`;
const Button = styled.button`
    background: white;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: .25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 2.5rem;
    width: 100px;
    h3{
        color: #000D36;
    }
`;
import axios from 'axios';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

export default function Form(){

    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [number, setNumber] = React.useState('');

    function resetFields(){
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        setUsername('');
        setStreet('');
        setNumber('');
    }
    async function login(e){
        e.preventDefault();
        try{
            if(password === passwordConfirm){
                const response = await axios.post('http://localhost:5000/sign-up', {
                    email: email,
                    password: password,
                    username: username,
                    street: street,
                    number: parseInt(number)
                });
                navigate('/');
            }
            else{
                alert('As senhas não são iguais');
                resetFields();
            }
        }
        catch(error){
            if (error.response.status === 409) {
                alert("Email já cadastrado! Tente novamente")
            }
            else {
                alert("Erro no sistema! Tente novamente.")
            }
            resetFields();
        }
    }

    return (
        
        <LoginForm onSubmit = {login}>
            <label for="firstname"><h4>Firstname</h4></label>
            <input name="firstname" type="text" onChange = {(e) => setUsername(e.target.value)} value = {username} placeholder='Your firstname'/>
            <input type="email" onChange = {(e) => setEmail(e.target.value)} value = {email} placeholder='E-mail'/>
            <input type="text" onChange = {(e) => setStreet(e.target.value)} value = {street} placeholder='Rua'/>
            <input type="number" onChange = {(e) => setNumber(e.target.value)} value = {number} placeholder='Número'/>
            <input type="password" onChange = {(e) => setPassword(e.target.value)} value = {password} placeholder='Senha'/>
            <input type="password" onChange = {(e) => setPasswordConfirm(e.target.value)} value = {passwordConfirm} placeholder='Confirme sua senha'/>
            <Buttons>
                <Button>
                    <h3>Next</h3>
                </Button>
            </Buttons>
        </LoginForm>
    );
}

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    input{
        width: 100%;
    }
    gap: 10px;
`;
const Button = styled.button`
    background: #000D36;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: .25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 2.5rem;
    width: 100px;
    h3{
        color: white;
    }
`;
const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`;
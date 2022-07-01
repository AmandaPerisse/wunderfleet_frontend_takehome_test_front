import axios from 'axios';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

export default function Form( { pageNumber } ){

    const navigate = useNavigate();

    async function handleButtonSubmit(e){

        e.preventDefault();
        if(pageNumber === 1){

            let firstname = (document.querySelector("#firstname")).value;
            localStorage.setItem('firstname', JSON.stringify(firstname));
            let lastname = (document.querySelector("#lastname")).value;
            localStorage.setItem('lastname', JSON.stringify(lastname));
            let phone = (document.querySelector("#phone")).value;
            localStorage.setItem('phone', JSON.stringify(phone));
            navigate('/address');

        }
        else if(pageNumber === 2){

            let street = (document.querySelector("#street")).value;
            localStorage.setItem('street', JSON.stringify(street));
            let number = (document.querySelector("#number")).value;
            localStorage.setItem('number', JSON.stringify(number));
            let zipCode = (document.querySelector("#zipCode")).value;
            localStorage.setItem('zipCode', JSON.stringify(zipCode));
            let city = (document.querySelector("#city")).value;
            localStorage.setItem('city', JSON.stringify(city));
            navigate('/payment');

        }
        else if(pageNumber === 3){

            let owner = (document.querySelector("#owner")).value;
            localStorage.setItem('owner', JSON.stringify(owner));
            let iban = (document.querySelector("#iban")).value;
            localStorage.setItem('iban', JSON.stringify(iban));
            try{
                const response = await axios.post('https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data', {
                    costmerId: 1,
                    iban: iban,
                    owner: owner
                });
                alert(`Success! All your data have been saved. Your payment data id is ${response.data.paymentDataId}`)
                localStorage.clear();
                navigate('/');
            }
            catch(e){
                alert("An error has occurred");
            }
            navigate('/');

        }
        
    }
    
    function handleButtonCancel(){
        navigate('/');
    }

    function InputsComponents(){
        if(pageNumber === 1){
            return(
                <>
                    <label htmlFor="firstname"><h4>Firstname</h4></label>
                    <input required id="firstname" name="firstname" type="text" placeholder='Your firstname'/>
                    <label htmlFor="lastname"><h4>Lastname</h4></label>
                    <input required id="lastname" name="lastname" type="text" placeholder='Your lastname'/>
                    <label htmlFor="phone"><h4>Phone Number</h4></label>
                    <input required id="phone" name="phone" type="text" pattern="^([+])[\d\s*]+" placeholder='+49 173 1234 567 incl. country code'/>
                </>
            );
        }

        else if(pageNumber === 2){
            return(
                <>
                    <label htmlFor="street"><h4>Street</h4></label>
                    <input required id="street" name="street" type="text" placeholder='Your street'/>
                    <label htmlFor="number"><h4>Number</h4></label>
                    <input required id="number" name="number" type="number" placeholder='Your house number'/>
                    <label htmlFor="zipCode"><h4>Zip code</h4></label>
                    <input required id="zipCode" name="zipCode" type="text" placeholder='Your house zip code'/>
                    <label htmlFor="city"><h4>City</h4></label>
                    <input required id="city" name="city" type="text" placeholder='Your city'/>
                </>
            );
        }

        else if(pageNumber === 3){
            return(
                <>
                    <label htmlFor="owner"><h4>Account owner</h4></label>
                    <input required id="owner" name="owner" type="text" placeholder='Name'/>
                    <label htmlFor="iban"><h4>IBAN</h4></label>
                    <input required id="iban" name="iban" type="text" placeholder='IBAN'/>
                </>
            );
        }
    }

    return (
        
        <LoginForm onSubmit={handleButtonSubmit}>
            <InputsComponents />
            <Buttons>
                <Button onClick={handleButtonCancel}>
                    <h3>Cancel</h3>
                </Button>
                <Button type="submit">
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
    justify-content: space-between;
`;
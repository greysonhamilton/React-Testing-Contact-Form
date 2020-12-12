import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react';
import ContactForm from './ContactForm';

test('Renders ContactForm without errors', () => {

    render(<ContactForm />);

});

// Note that first name does not have an id and only allows a maximum of three characters

test('User can fill out the form', async() => {

    render(<ContactForm />);

    const fnameInput = screen.getByPlaceholderText(/Edd/i);
    const lnameInput = screen.getByPlaceholderText(/Burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const msgInput = screen.getByLabelText(/message/i);

    fireEvent.change(fnameInput, {target: {value: 'Gry'}});
    fireEvent.change(lnameInput, {target: {value: 'Hamilton'}});
    fireEvent.change(emailInput, {target: {value: 'greyson.r.hamilton@gmail.com'}});
    fireEvent.change(msgInput, {target: {value: 'I come from the land down under!'}});
    
    const button = screen.getByRole('button', {name: /submit/i});
    fireEvent.click(button);

    const gry = await screen.findByText(/gry/i);
    expect(gry).toBeInTheDocument();

    const hamilton = await screen.findByText(/hamilton/i);
    expect(hamilton).toBeInTheDocument();

    const greyson = await screen.findByText(/greyson.r.hamilton@gmail.com/i);
    expect(greyson).toBeInTheDocument();

    const down = await screen.findByText(/i come from the land down under/i);
    expect(down).toBeInTheDocument();

});

test('testing max length requirment of First Name input', () => {

    render(<ContactForm />);

    const fnameInput = screen.getByPlaceholderText(/Edd/i);
    fireEvent.change('Grey');

});

test('testing email input validation', () => {

    render(<ContactForm />);

    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    fireEvent.change('mybox#box.com');
    
})
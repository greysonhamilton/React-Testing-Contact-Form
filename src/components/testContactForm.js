import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('Renders ContactForm without errors', () => {

    render(<ContactForm />);

});

test('User can fill out the form', () => {

    render(<ContactForm />);

    const fnameInput = screen.getByLabelText(/first name/i);
    const lnameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const msgInput = screen.getByLabelText(/message/i);

    userEvent.type(fnameInput, 'Ted');
    userEvent.type(lnameInput, 'Bundy');
    userEvent.type(emailInput, 'greyson.r.hamilton@gmail.com');
    userEvent.type(msgInput, 'I come from the land down under!');

})
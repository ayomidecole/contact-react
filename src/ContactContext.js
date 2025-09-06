import { createContext, useState } from 'react';

export const ContactContext = createContext(null);

const initialContacts = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        phone: '123-456-7890',
    },
    {
        id: 3,
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@example.com',
        phone: '123-456-7890',
    },
    {
        id: 4,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phone: '123-456-7890',
    },
];

export const ContactProvider = (props) => {
    const [contacts, setContacts] = useState(initialContacts); // Use initialContacts here

    return (
        <ContactContext.Provider value={{ contacts, setContacts }}>
            {props.children}
        </ContactContext.Provider>
    );
};
import { useState } from 'react';
import './Lists.css';
import ListItem from './ListItem';
import Form from './Form';

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

function List() {
    const [contacts, setContacts] = useState(initialContacts);

    async function handleDelete(contact) {
        const url = `http://localhost:8001/contacts/api/${contact.id}`;
        const response = await fetch(url, {
            method: 'DELETE',
        });
        if (response.status === 200) {
            setContacts((prevState) =>
                prevState.filter((prevContact) => prevContact.id !== contact.id)
            );
        }
    }

    async function handleSave(contact) {
        const url = `http://localhost:8001/api/contacts/`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact),
        });
    }

    return (
        <>
            <h1 style={{ textDecoration: 'underline' }}>Contact List</h1>
            <table className="contactTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <ListItem
                            key={contact.id}
                            contact={contact}
                            onDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
            <Form onSave={handleSave} />
        </>
    );
}

export default List;

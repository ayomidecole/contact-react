import { use, useState } from 'react';

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
    return (
        <>
            <h1 style={{ textDecoration: 'underline' }}>Contact List</h1>
            <table>
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
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default List;

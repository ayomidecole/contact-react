import { useContext } from 'react';
import { ContactContext } from './ContactContext';
import './Lists.css';
import ListItem from './ListItem';

function List() {
    const { contacts, setContacts } = useContext(ContactContext);

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
        </>
    );
}

export default List;
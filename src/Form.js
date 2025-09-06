import { useContext, useState } from 'react';
import { ContactContext } from './ContactContext';
const initialContact = { firstName: '', lastName: '', email: '' };

function Form({ onSave }) {
    const { contacts, setContacts } = useContext(ContactContext);
    const [contact, setContact] = useState(initialContact);

    async function handleSave(contact) {
        const url = 'http://localhost:3001/contacts';
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact),
        });
        if (response.status === 200) {
            const id = response.headers.get('Location').split('/').pop();
            setContacts((prevContacts) => [...prevContacts, contact]);
        }
    }

    function handleChange(e) {
        const key = e.currentTarget.name;
        const value = e.currentTarget.value;
        setContact((prevContact) => ({ ...prevContact, [key]: value }));
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSave(contact);
                setContact(initialContact);
            }}
        >
            <label>
                First name:
                <input
                    type="text"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name:
                <input
                    type="text"
                    name="firstName"
                    value={contact.lastNamestName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Write</button>
        </form>
    );
}

export default Form;

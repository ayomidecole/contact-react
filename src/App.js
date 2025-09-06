import './App.css';
import { ContactProvider } from './ContactContext';
import List from './List';
import Form from './Form';

function App() {
    return (
        <ContactProvider>
            <List />
            <Form />
        </ContactProvider>
    );
}

export default App;

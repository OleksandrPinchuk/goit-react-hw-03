import { useState, useEffect } from "react";
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import initialContacts from './initialContacts.json'
import './App.css'

const allContacts = () => {
  const storedContacts = localStorage.getItem('contacts');
  return storedContacts ? JSON.parse(storedContacts) : initialContacts;
}

function App() {

  const [contacts, setContacts] = useState(allContacts);
  const [searchName, setSearchName] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
  
  const addContact = (newContact) => {
    setContacts([...contacts, newContact])
  }
  // const addContact = (newContact) => {
  //   setContacts((contacts) => {
  //     return [...contacts, newContact]
  //   }) 
  // }

  const deleteContact = (contactId) => {
      setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  }

  const handleSearch = (value) => { setSearchName(value) };

  const filteredContacts = contacts.filter((contact) => {
    contact.name.toLowerCase().includes(searchName.toLowerCase())
    console.log(contact.name.toLowerCase().includes(searchName.toLowerCase()))
  });
  console.log(filteredContacts)

  return (
    
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox searchName={searchName} handleSearch={handleSearch}/>
        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </div>
  )
}

export default App

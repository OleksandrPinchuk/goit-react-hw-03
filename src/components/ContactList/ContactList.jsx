import Contact from '../Contact/Contact';
import css from './ContaktList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
    
    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} deleteContact={deleteContact}  />
            ))}
        </ul>
    )
}

export default ContactList
import css from './Contact.module.css'
const Contact = ({ contact, deleteContact }) => {
    
    return (
        <li className={css.item}>
            <div>
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
            </div>
            <button type='button' onClick={()=>deleteContact(contact.id)}>Delete</button>
        </li>
    )
}

export default Contact
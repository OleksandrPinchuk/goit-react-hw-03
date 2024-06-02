const Contact = ({contact, deleteContact}) => {
    return (
        <li>
            {contact.name} {contact.phone}
            <button type='button' onClick={()=>deleteContact(contact.id)}>Delete</button>
        </li>
    )
}

export default Contact
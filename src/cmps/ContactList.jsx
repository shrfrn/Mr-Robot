import React from "react";
import ContactPreview from "./ContactPreview";

export default function ContactList({ contacts, onSelectContact }) {
    return (
        contacts.map(contact => 
            <ContactPreview 
                key={contact._id}   
                contact={ contact }
                onClick={ () => onSelectContact(contact) }/>)
    )
}
import React from 'react';

function ContactList({ contacts, onEditContact, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <div>
            <img src={contact.photoURL} alt={contact.name} />
          </div>
          <div>
            <p>{contact.name}</p>
            <p>{contact.phoneNumber}</p>
            <button onClick={() => onEditContact(index)}>Редактировать</button>
            <button onClick={() => onDeleteContact(index)}>Удалить</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

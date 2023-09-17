import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function ContactApp() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'photoURL':
        setPhotoURL(value);
        break;
      default:
        break;
    }
  }

  const handleAddContact = () => {
    const newContact = {
      name,
      phoneNumber,
      photoURL,
    };
    setContacts([...contacts, newContact]);
    setName('');
    setPhoneNumber('');
    setPhotoURL('');
  }

  const handleEditContact = (index) => {
    const contactToEdit = contacts[index];
    setName(contactToEdit.name);
    setPhoneNumber(contactToEdit.phoneNumber);
    setPhotoURL(contactToEdit.photoURL);
    setIsEditing(true);
    setEditIndex(index);
  }

  const handleUpdateContact = () => {
    const updatedContact = {
      name,
      phoneNumber,
      photoURL,
    };
    const updatedContacts = [...contacts];
    updatedContacts[editIndex] = updatedContact;
    setContacts(updatedContacts);
    setName('');
    setPhoneNumber('');
    setPhotoURL('');
    setIsEditing(false);
    setEditIndex(null);
  }

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  }

  return (
    <div>
      <h1>Контактная книга</h1>
      <ContactForm
        name={name}
        phoneNumber={phoneNumber}
        photoURL={photoURL}
        isEditing={isEditing}
        onInputChange={handleInputChange}
        onSubmit={isEditing ? handleUpdateContact : handleAddContact}
      />
      <ContactList
        contacts={contacts}
        onEditContact={handleEditContact}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default ContactApp;

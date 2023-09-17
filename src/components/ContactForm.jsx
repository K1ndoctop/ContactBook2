import React from 'react';

function ContactForm({ name, phoneNumber, photoURL, isEditing, onInputChange, onSubmit }) {
  return (
    <div>
      <input type="text" name="name" placeholder="Имя" value={name} onChange={onInputChange} />
      <input type="text" name="phoneNumber" placeholder="Номер телефона" value={phoneNumber} onChange={onInputChange} />
      <input type="text" name="photoURL" placeholder="URL фотографии" value={photoURL} onChange={onInputChange} />
      {isEditing ? (
        <button onClick={onSubmit}>Обновить</button>
      ) : (
        <button onClick={onSubmit}>Добавить</button>
      )}
    </div>
  );
}

export default ContactForm;

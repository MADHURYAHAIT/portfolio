import React, { useState } from 'react';

const SalesforceForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !country || !description) {
      alert('Please fill in all required fields');
      return;
    }
    const formData = new FormData();
    formData.append('oid', '00DNS000000ldM5');
    formData.append('retURL', 'https://madhuryahait.github.io/portfolio/');
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('description', description);

    fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DNS000000ldM5', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first_name">First Name *</label>
      <input
        id="first_name"
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        maxLength="40"
        size="20"
        required
      />
      <br />

      <label htmlFor="last_name">Last Name *</label>
      <input
        id="last_name"
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        maxLength="80"
        size="20"
        required
      />
      <br />

      <label htmlFor="email">Email *</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        maxLength="80"
        size="20"
        required
      />
      <br />

      <label htmlFor="country">Country *</label>
      <input
        id="country"
        type="text"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
        maxLength="40"
        size="20"
        required
      />
      <br />

      <label htmlFor="description">Description *</label>
      <textarea
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <br />

      <input type="submit" name="submit" value="Submit" />
    </form>
  );
};

export default SalesforceForm;
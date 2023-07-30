import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(true);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const login = (
    <form action="#">
      <input
        type="password"
        placeholder="Password"
      />
    </form>
  );

  return (
      <div id="authorization">
        {authorized ? <h1>Contact</h1> : <h1>Enter the Password</h1>}
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
      </div>
  );
}

export default Contact;

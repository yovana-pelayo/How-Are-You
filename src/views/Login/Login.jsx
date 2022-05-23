import React, { useState } from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const { login, signUp } = useUser();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !password) return;
    try {
      const user =
        type === 'signin'
          ? await login(email, password)
          : await signUp(email, password);
      const url = location.state ? location.state.from.pathname : '/';
      history.replace(url);
    } catch (e) {
      e.message
        ? setErrorMessage(e.message)
        : setErrorMessage('Something went wrong. Refresh!');
    }
  };

  return (
    <div className="auth">
      <span
        className={type === 'signin' ? 'active' : ''}
        onClick={() => setType('signin')}
      >
        Sign In
      </span>
      <span
        className={type === 'signup' ? 'active' : ''}
        onClick={() => setType('signup')}
      >
        Sign Up
      </span>

      <div className="error-message">{errorMessage} </div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">{type}</button>
      </form>
    </div>
  );
}
// const url = location.state ? location.state.from.pathname : '/';
// history.replaceState(url);

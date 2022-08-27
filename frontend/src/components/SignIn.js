import React from 'react';
import './SignIn.scss';
const SignIn = () => {
  return (
    <div className="login">
      <div className="login-box">
        <h3>Login</h3>
        <input
          type="email"
          name="email"
          required
          placeholder="masukan email"
          class="login-input"
        />

        <input
          type="pass"
          name="pass"
          required
          placeholder="masukan password"
          class="login-input"
        />

        <input type="submit" value="login" name="submit" class="btn" />
        <p>
          Tidak punya akun? <a href="#">Daftar sekarang</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

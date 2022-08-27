import React from 'react';
import './Register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="register-box">
        <h2>Daftar Sekarang</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Masukan Nama"
          class="input-register"
          maxlength="50"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Masukan Email"
          class="input-register"
          maxlength="50"
        />

        <input
          type="password"
          name="pass"
          required
          placeholder="Masukan Password"
          class="input-register"
          maxlength="50"
        />

        <input
          type="password"
          name="cpass"
          required
          placeholder="Konfirmasi Password"
          class="input-register"
          maxlength="50"
        />

        <input type="submit" value="register now" name="submit" class="btn" />
        <p>
          already have an account? <a href="login.html">login now</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

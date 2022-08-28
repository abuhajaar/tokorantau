import React from 'react';
import './Contact.scss';
import kontak from '../assets/Contact.svg';

const Contact = () => {
  return (
    <div className="kontak">
      <div className="row-kontak">
        <div className="image">
          <img src={kontak}></img>
        </div>
        <div className="form-kontak">
          <h3>Beritahu Kami Sesuatu!</h3>
          <input
            type="text"
            name="name"
            required
            placeholder="masukan nama"
            class="input-kontak"
            maxlength="30"
          />
          <input
            type="number"
            name="phone"
            required
            placeholder="masukan nomor telefon"
            class="input-kontak"
            maxlength="20"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="masukan email"
            class="input-kontak"
            maxlength="50"
          />
          <textarea
            type="text"
            name="deskripsi"
            required
            placeholder="ketik pesan"
            class="input-deskripsi"
            maxlength="80"
          />
          <button className="btn-kontak">Kirim Pesan</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

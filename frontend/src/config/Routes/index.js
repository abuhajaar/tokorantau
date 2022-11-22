import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Akun,
  Cari,
  Home,
  Hubungi,
  Kategori,
  Keranjang,
  List,
  Login,
  Pesanan,
  Produk,
  Daftar,
  Tentang,
} from '../../pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/akun">
          <Akun />
        </Route>

        <Route path="/cari">
          <Cari />
        </Route>

        <Route path="/hubungi">
          <Hubungi />
        </Route>

        <Route path="/kategori">
          <Kategori />
        </Route>

        <Route path="/keranjang">
          <Keranjang />
        </Route>

        <Route path="/list">
          <List />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/pesanan">
          <Pesanan />
        </Route>

        <Route path="/produk/:id">
          <Produk />
        </Route>

        <Route path="/daftar">
          <Daftar />
        </Route>

        <Route path="/tentang">
          <Tentang />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

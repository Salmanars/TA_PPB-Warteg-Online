import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { NavbarComponent } from './components';  // Pastikan komponen Navbar diimpor dengan benar
import { Home, Sukses, About, Masukan, Comment, Parent, Profil } from './pages';  // Tambahkan komponen baru di sini

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/sukses" component={Sukses} exact/>     
            <Route path="/about" component={About} exact/>  
            <Route path="/masukan" component={Masukan} exact/>
            <Route path="/comment" component={Comment} exact/>  {/* Route untuk Comment */}
            <Route path="/parent" component={Parent} exact/>  {/* Route untuk Parent */}
            <Route path="/profil" component={Profil} exact/>  {/* Route untuk Profil */}
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

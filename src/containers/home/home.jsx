import React, { Component } from 'react';
import Header from '../../components/header';
import Jumbotron from '../../components/jumbotron';

export default class home extends Component {
  render() {
    return (
      <div>
        <Header name="Home" />
        <Jumbotron title="GO - Food" judul="Kamu ga bisa masak? Pesan makanan disini ajah" />
      </div>
    );
  }
}

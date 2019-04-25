import React, { Component } from 'react';

import Header from '../../components/header';
import Counter from '../../components/counter';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
class Dashboard extends Component {
  state = {
    makanan: [
      {
        id: 1,
        number: 0,
        price: 15500,
        nama: 'Nasi Merah',
        gambar:
          'https://www.sahabatnestle.co.id/uploads/media/article/0001/04/thumb_3661_article_image_723x480.jpeg'
      },
      {
        id: 2,
        number: 0,
        price: 10500,
        nama: 'Nasi Ruwet',
        gambar:
          'http://www.dapurkobe.co.id/wp-content/uploads/nasi-goreng-teri.jpg'
      },

      {
        id: 3,
        number: 0,
        price: 8000,
        nama: 'Nasi Goreng',
        gambar:
          'https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg'
      },
      {
        id: 4,
        number: 0,
        price: 3000,
        nama: 'Nasi Kucing',
        gambar:
          'http://lh3.googleusercontent.com/-mIBY0O5nmZ0/VpSCoo0EEvI/AAAAAAAAANs/yxPx6Xk3CJU/s1600/IMG_0870.JPG'
      }
    ],
    total: 0
  };
  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });
  };
  kurangTotalHarga = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };
  render() {
    return (
      <div align="center">
        <Header />
        <Row>
          {this.state.makanan.map((item, index) => (
            <Col xs="12" md="6" lg="3">
              <Counter
                nomor={item.number}
                tambahTotalHarga={this.tambahTotalHarga}
                kurangTotalHarga={this.kurangTotalHarga}
                gambar={item.gambar}
                indexMakanan={index}
                nama={item.nama}
                harga={item.price}
              />
            </Col>
          ))}
        </Row>
        <Jumbotron>
          <Container>
            <h5>
              <b>Total Belanja Kamu :</b>
            </h5>
            <ul>
              {/* {this.state.makanan.map(item => (
                <li>{item.price}</li>
              ))} */}
              <li>
                <b>Rp. {this.state.total}</b>
              </li>
            </ul>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Dashboard;

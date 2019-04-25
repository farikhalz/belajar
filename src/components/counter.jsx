import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardSubtitle,
  Button,
  CardFooter
} from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
export default class Counter extends Component {
  state = {
    qty: 0
  };

  tambah = () => {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.tambahTotalHarga(this.props.harga);
  };
  kurang = () => {
    if (this.state.qty === 0) {
      return;
    }
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.kurangTotalHarga(this.props.harga);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <Card style={{ width: '100%', height: '50%', marginRight: '10px' }}>
          <CardImg
            top
            width="100%"
            src={this.props.gambar}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.nama}</CardTitle>
            <p>Rp. {this.props.harga}</p>
            <p>Pesan Berapa</p>
            <h1>{this.state.nomor}</h1>
            <div>
              <Navbar
                style={{ backgroundColor: 'lightblue' }}
                color="faded"
                light
              >
                <Button
                  onClick={() => {
                    this.kurang(this.props.indexMakanan, this.props.nomor);
                  }}
                  className="btn btn-danger m-2"
                >
                  -
                </Button>

                <h1 align="justify">{this.state.qty} </h1>
                <Button
                  onClick={() => {
                    this.tambah(this.props.indexMakanan, this.props.nomor);
                  }}
                  className="btn btn-success m-2"
                >
                  +
                </Button>
              </Navbar>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

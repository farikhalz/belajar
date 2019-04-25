import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Jumbo = props => {
  return (
    <div align="center">
      <Jumbotron>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.judul}</p>
        <hr className="my-2" />
        <p className="lead">
          <Button tag={Link} to="/dashboard" color="success">
            Pesan Disini
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;

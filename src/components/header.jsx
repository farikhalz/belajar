import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Spinner,
    NavLink
} from 'reactstrap';
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <Navbar style={{ backgroundColor:'cyan' }} color="faded" light>
                <NavbarBrand href="/" className="mr-auto">
                    <Spinner type="grow" color="primary" />
                    <b>GO-Food</b>
                </NavbarBrand>
                <Collapse isOpen={!this.state.collapsed} navbar>
                </Collapse>
                </Navbar>
            </div>
        )
    }
}

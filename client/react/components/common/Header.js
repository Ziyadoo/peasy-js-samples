import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import constants from '../../constants';

let routes = constants.routes;

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <IndexLink to={routes.ROOT} activeClassName="active">Orders</IndexLink>
      {" | "}
      <Link to={ routes.CUSTOMERS } activeClassName="active">Customers</Link>
      {" | "}
      <Link to={ routes.CATEGORIES } activeClassName="active">Categories</Link>
      {" | "}
      <Link to={ routes.PRODUCTS } activeClassName="active">Products</Link>
      {" | "}
      <Link to={ routes.INVENTORY_ITEMS } activeClassName="active">Inventory</Link>
    </nav>
  );
};

export default Header;
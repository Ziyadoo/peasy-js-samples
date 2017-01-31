import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CustomersView from './components/customer/CustomersView';
import CategoriesView from './components/category/CategoriesView';
import ProductsView from './components/product/ProductsView';
import OrdersView from './components/OrdersView';
import ManageCustomer from './components/customer/ManageCustomer';
import ManageCategory from './components/category/ManageCategory';
import ManageProduct from './components/product/ManageProduct';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CustomersView} />
    <Route path="/orders" component={OrdersView} />
    <Route path="/categories" component={CategoriesView} />
    <Route path="/category" component={ManageCategory} />
    <Route path="/category/:id" component={ManageCategory} />
    <Route path="/customer" component={ManageCustomer} />
    <Route path="/customer/:id" component={ManageCustomer} />
    <Route path="/products" component={ProductsView} />
    <Route path="/product" component={ManageProduct} />
    <Route path="/product/:id" component={ManageProduct} />
  </Route>
);
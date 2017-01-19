import constants from '../constants';

export default function customerReducer(state = [], action) {
  switch (action.type) {
    case constants.actions.CREATE_CUSTOMER:
      return [...state, Object.assign({}, action.customer)];
    case constants.actions.LOAD_CUSTOMERS_SUCCESS:
      return action.customers;
    default:
      return state;
  }
};
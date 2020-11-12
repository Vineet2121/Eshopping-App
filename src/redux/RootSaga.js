import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/ShopSaga';

import { usersSagas } from './user/UserSaga';

import { cartSagas } from './cart/CartSaga';

export default function* rootSage() {
  yield all([call(shopSagas), call(usersSagas), call(cartSagas)]);
}

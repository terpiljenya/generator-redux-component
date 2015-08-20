import Immutable from 'immutable';

import createReducer from 'lib/createReducer';

import { ACTION_NAME } from './actions';

const initialState = Immutable.fromJS({ authenticated: false, wrongCredentials: false });

export default createReducer(initialState, {

  [ACTION_NAME](state, action) {
    return state;
  }

});

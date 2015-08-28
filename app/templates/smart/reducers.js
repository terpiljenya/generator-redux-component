import Immutable from 'immutable';

import createReducer from 'lib/createReducer';

import { events } from './actions';

const initialState = Immutable.fromJS({});

export default createReducer(initialState, {

  [events.ACTION_NAME](state, action) {
    return state;
  }

});

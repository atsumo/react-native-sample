import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';

const initialState = {};

export function index(state = initialState, action = {}) {
  switch(action.type){
    case types.LOGIN:
      return {...state, };
    default:
      return state;
  }
}

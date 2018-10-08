import * as types from '../actions/action_types'

export default function courseReducer(state = [], action){
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, action.course];
    default:
      return state;
  }
}

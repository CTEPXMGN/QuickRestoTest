import * as actions from './actionTypes';

export default function reducer(state, action) {
  // РЕВЬЮ: оправдано ли дублирование?
  switch (action.type) {
    case actions.POINT_ADD:
      return state;
    case actions.POINT_ADD:
      return state;
    case actions.POINT_ADD:
      return state;
    default:
      return state;
  }
}

import * as actions from './actionTypes';

export const addPoint = (point) => ({
  type: actions.POINT_ADD,
  payload: point,
});

export const changePoint = (point) => ({
  type: actions.POINT_CHANGE,
  payload: point,
});

export const removePoint = (id) => ({
  type: actions.POINT_REMOVE,
  payload: id,
});

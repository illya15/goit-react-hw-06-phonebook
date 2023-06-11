import { createReducer } from '@reduxjs/toolkit';
import { stateFilter } from './stateFilter';

import { changeFilterAction } from './actions';
export const filterReducer = createReducer(stateFilter, {
  [changeFilterAction]: (state, action) => {
    return { ...state, filter: action.payload };
  },
});

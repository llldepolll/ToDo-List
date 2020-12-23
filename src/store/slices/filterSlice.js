import { entities, filterTypes } from '../../constants';
import { createSlice } from '@reduxjs/toolkit';

export const filterInitialState = filterTypes.all;

const filterSlice = createSlice({
  name: entities.filter,
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action) => action.payload,
  }
})

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;

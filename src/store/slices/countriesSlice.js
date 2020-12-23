import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { entities } from '../../constants';
import Api from '../../services/api';

export const countriesInitialState = {
  items: [],
  selected: "RU",
  isPending: true,
  searchQuery: '',
};

export const fetchCountries = createAsyncThunk(`fetchCountries`, async () => {
  return Api.getAllCountries();
});

const countriesSlice = createSlice({
  name: entities.countries,
  initialState: countriesInitialState,
  reducers: {
    changeSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
      state.searchQuery = '';
    },
  },
  extraReducers: {
    [fetchCountries.pending]: (state, action) => {
      state.isPending = true;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isPending = false;
    },
  },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice.reducer;

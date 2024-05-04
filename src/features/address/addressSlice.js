import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: JSON.parse(localStorage.getItem('address')) || {
    latitude: 28.6667,
    longitude: 77.2167,
    city: 'Delhi',
  },
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address =JSON.stringify( action.payload);
      // console.log(" dekh " +  JSON.stringify(state.address));
      localStorage.setItem('address', state.address);
    },
  },
});

export const selectAddress = ({ address }) => address;

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;

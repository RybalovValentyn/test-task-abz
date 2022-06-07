import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector} from 'react-redux';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const getToken = '/token';
const positions = '/positions';
const getUsers = '/users?page=1&count=6';
const signUp = '/users'


export const currentThunk = createAsyncThunk(
    'users/position',
    async (_, { rejectWithValue}) => {

        try {
          const { data } = await axios.get(positions);
         return data;
        } catch (error) {
          return rejectWithValue({
            error: error.message,
          } );

      }
    },
  );


  export const tokenThunk = createAsyncThunk(
    'users/token',
    async (_, { rejectWithValue}) => {

        try {
          const { data } = await axios.get(getToken);
          return data;
        } catch (error) {
          return rejectWithValue({
            error: error.message,
          } );

      }
    },
  );

  export const usersThunk = createAsyncThunk(
    'users/users',
    async (_, { rejectWithValue}) => {

        try {
          const { data } = await axios.get(getUsers);
          return data;
        } catch (error) {
          return rejectWithValue({
            error: error.message,
          } );

      }
    },
  );
  export const usersShowMoreThunk = createAsyncThunk(
    
    'users/more',
    async (_, { rejectWithValue, getState}) => {
      const state = getState();
        try {
          const { data } = await axios.get(`/users?page=${state.auth.page}&count=6`);
          console.log(data);
          return data;
        } catch (error) {
          return rejectWithValue({
            error: error.message,
          } );

      }
    },
  );

  export const loginThunk = createAsyncThunk(
    'users/login',    
    async (formData,{ rejectWithValue}) => {
const headers = { 
  "Content-Type": "multipart/form-data",
  'Token':[...formData][5][1]
}; 
  try {
        const { data } = await axios.post(signUp, formData, { headers });
  console.log(data);
        return data;
      } catch (error) {
        return rejectWithValue({
          error,
        });
      }
    },
  );
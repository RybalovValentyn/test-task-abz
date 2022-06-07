import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {currentThunk, tokenThunk, usersThunk, usersShowMoreThunk} from './asyncthunc';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const token = Object.freeze({
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    token: null,
    error: null,
    isLoading: false,
    isAuth: false,
    id: '',
    position: [],
    users:[],
    page: 1,
    totalPages: null,
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1
    },
  },
  extraReducers: {
    [currentThunk.pending](state, action) {
      return {
        ...state,       
        isLoading: true,
        isAuth: false,
      };
    },
    [currentThunk.fulfilled](state, action) {
      return {
        ...state,
        position: [...action.payload.positions],
        isLoading: false,
      };
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [tokenThunk.pending](state, action) {
      return {
        ...state,       
        isLoading: true,
        isAuth: false,
      };
    },
    [tokenThunk.fulfilled](state, action) {
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        isAuth: true,
        
      };
    },
    [tokenThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [usersThunk.pending](state, action) {
      return {
        ...state,       
        isLoading: true,
        isAuth: true
      };
    },
    [usersThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        users: action.payload.users,
        totalPages: action.payload.total_pages
      };
    },
    [usersThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [usersShowMoreThunk.pending](state, action) {
      return {
        ...state,       
        isLoading: true,
        isAuth: true
      };
    },
    [usersShowMoreThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        users: action.payload.users,
        pages: action.payload.page,
        totalPages: action.payload.total_pages
      };
    },
    [usersShowMoreThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
   },
});
export const { incrementPage, initUser} = authSlice.actions
export default authSlice.reducer;
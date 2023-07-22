import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorServes } from 'components/ErrorPage/error';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thinkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      errorServes();
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thinkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      errorServes();
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thinkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thinkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thinkAPI) => {
    const { token } = thinkAPI.getState().auth;
    if (!token) {
      return thinkAPI.rejectWithValue('No valid token');
    }
    try {
      setAuthHeader(token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

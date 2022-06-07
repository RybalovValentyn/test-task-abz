import { configureStore} from '@reduxjs/toolkit';
import authSlice from '../redux/reducer';
import formSlise from './formSlise';

export default configureStore({
  reducer: {
    auth: authSlice,
    form: formSlise,
  },
})
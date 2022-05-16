import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './pages/main/mainReducer';

export default configureStore({
  reducer: {
    main: mainReducer,
  },
});

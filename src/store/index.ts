import { configureStore } from '@reduxjs/toolkit';

import formReducer from './reducers/formReducer';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

// je détermine le type de mon state autiomatiquement
export type RootState = ReturnType<typeof store.getState>;

export default store;

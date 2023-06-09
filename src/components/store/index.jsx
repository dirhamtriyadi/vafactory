import {configureStore} from '@reduxjs/toolkit';
import homeReducer from './Home';
import {reducer as formReducer} from 'redux-form';

export const store = configureStore({
    reducer: {
        home: homeReducer,
        form: formReducer,
    },
})
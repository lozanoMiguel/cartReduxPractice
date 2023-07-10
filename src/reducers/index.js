import gibsonReducer from './gibsonReducer';
import offwhiteReducer from './offwhiteReducer';
import stanleyReducer from './stanleyReducer';
import clientReducer from './clientReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    gibson: gibsonReducer,
    off: offwhiteReducer,
    stanley: stanleyReducer,
    client: clientReducer
});

export default allReducers;
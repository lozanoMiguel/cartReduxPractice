import gibsonReducer from './gibsonReducer';
import offwhiteReducer from './offwhiteReducer';
import stanleyReducer from './stanleyReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    gibson: gibsonReducer,
    off: offwhiteReducer,
    stanley: stanleyReducer
});

export default allReducers;
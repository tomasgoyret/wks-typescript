import {combineReducers} from 'redux';

interface stateI {
	counter: number;
}

const initialState : stateI = {
    counter: 1
}

interface actionI {
	type: string;
}

const rootReducer = combineReducers({
	counter: () => 1,
});

export default rootReducer
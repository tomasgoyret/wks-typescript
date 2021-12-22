import {combineReducers} from 'redux';
import { usersReducer} from './users'
import { User } from '../actions/actions';

export interface StoreState {
	users: User[];
}

const rootReducer = combineReducers<StoreState>({
	users : usersReducer,
});

export default rootReducer
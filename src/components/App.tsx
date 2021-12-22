import {connect} from 'react-redux';
import {User, fetchUsers} from '../redux/actions/actions';
import {StoreState} from '../redux/reducers/reducers';
import { useEffect } from 'react';

interface AppProps {
	users: User[];
	fetchUsers(): any;
}

function App(props: AppProps) {
	
	useEffect(() => {
		props.fetchUsers();
	}, []);

	return <div>Hello Henrys</div>;
}

const mapStateToProps = (state: StoreState): {users: User[]} => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, {fetchUsers})(App);
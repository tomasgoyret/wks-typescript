import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import App from './components/App'

ReactDOM.render(
	<Provider store={store}>
		<h1>Henry</h1>
	</Provider>,
	document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import App from './components/App'

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	document.querySelector('#root')
);
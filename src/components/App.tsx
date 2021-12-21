import React, { useState } from 'react';

interface AppProps {
	title: string
}

export default function App({title}:AppProps): JSX.Element {
	const [counter, setCounter] = useState(0)

	return (
	<div>
		<h3>Henry Workshop - {title} </h3>
		<hr></hr>
		<button onClick={()=>setCounter(counter+1)}>Increment</button>
		<button onClick={()=>setCounter(counter-1)}>Decrement</button>
		<br></br>
		<span>{counter}</span>
	
	</div>
	);
}

// ReactDOM.render(<App title = "Typescript" />, document.querySelector('#root'));
// interface AppState {
// 	counter: number
//   }

// class App extends React.Component<AppProps, AppState> {
// 	constructor(props: AppProps) {
// 		super(props);
// 		this.state = {counter: 0};
// 	}

// 	onIncrement = (): void => {
// 		this.setState({counter: this.state.counter + 1});
// 	};

// 	onDecrement = (): void => {
// 		this.setState({counter: this.state.counter - 1});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<h3>Henry Workshop - {this.props.title}</h3>
// 				<hr></hr>
// 				<button onClick={this.onIncrement}>Increment</button>
// 				<button onClick={this.onDecrement}>Decrement</button>
// 				<br></br>
// 				<span>{this.state.counter}</span>
// 			</div>
// 		);
// 	}
// }
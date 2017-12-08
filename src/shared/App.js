import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Menu from 'components/Menu';
import ClassNames from 'classnames/bind';
import Styles from './App.scss';
const css = ClassNames.bind(Styles);

class App extends Component {
	
	render() {
		return (
			<div>
				<Menu/>
				<Route exact path="/" component={Home}/>
				<Switch>
					<Route path="/about/:name" component={About}/>
					<Route path="/about" component={About}/>
				</Switch>
				<div className={css('box',{
					blue: true
				})}>
				</div>
			</div>
		);	
	}
}

export default App;
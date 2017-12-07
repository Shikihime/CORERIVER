import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Menu from 'components/Menu';

import classNames from 'classnames/bind';
import styles from './App.scss';
const cx = classNames.bind(styles);

console.log(styles); // 콘솔에 뭐가 프린트되는지 확인해보세요!

class App extends Component {
	render() {
		const isBlue = true;

		return (
			/*<div>
				<Menu/>
				<Route exact path="/" component={Home}/>
				<Switch>
					<Route path="/about/:name" component={About}/>
					<Route path="/about" component={About}/>
				</Switch>
			</div>*/
			<div className={cx('box', {
				blue: isBlue
			})}>
			</div>			
			
		);	
	}
}

export default App;
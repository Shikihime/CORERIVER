import React from "react";
import { NavLink } from "react-router-dom";
import ClassNames from "classnames/bind";
import Styles from "./Menu.scss";
const css = ClassNames.bind(Styles);
const ww = window.innerWidth / 1000;
const wh = window.innerHeight / 1000;

const Menu = () => {
	
	const swipeBody = { width: (ww * 1000)+"px", height: (wh * 100)+"px" };
	const swipeHeight = { height: (wh * 100)+"px" };
	const swipeItem = { width: (wh * 100)+"px", height: (wh * 100)+"px" };

	function asdf(){
		console.log({swipeBody});
	}
	
	return (
		<div className={css("Menu")}>
			<div style={swipeBody} className={css("swipeBody")}>
				<ul className={css("swipeMenu")} style={swipeHeight}>
					
					<li className={css("swipeItem")} style={swipeItem} onClick={asdf}>
						<table className={css("swipeTable")}>
							<tbody>
								<tr className={css("swipeBlank")}><td></td></tr>
								<tr className={css("swipeImage",{swipe_0: true})}><td></td></tr>
								<tr className={css("swipeText")}><td>1111</td></tr>
								<tr className={css("swipeBlank")}><td></td></tr>
							</tbody>
						</table>
					</li>
					<li className={css("swipeItem")} style={swipeItem}>
						<table className={css("swipeTable")}>
							<tbody>
								<tr className={css("swipeBlank")}><td></td></tr>
								<tr className={css("swipeImage",{swipe_1: true})}><td></td></tr>
								<tr className={css("swipeText")}><td>2222</td></tr>
								<tr className={css("swipeBlank")}><td></td></tr>
							</tbody>
						</table>
					</li>
					<li className={css("swipeItem")} style={swipeItem}>
						<table className={css("swipeTable")}>
							<tbody>
								<tr className={css("swipeBlank")}><td></td></tr>
								<tr className={css("swipeImage",{swipe_2: true})}><td></td></tr>
								<tr className={css("swipeText")}><td>3333</td></tr>
								<tr className={css("swipeBlank")}><td></td></tr>
							</tbody>
						</table>
					</li>
					<li className={css("swipeItem")} style={swipeItem}>
						<table className={css("swipeTable")}>
							<tbody>
								<tr className={css("swipeBlank")}><td></td></tr>
								<tr className={css("swipeImage",{swipe_3: true})}><td></td></tr>
								<tr className={css("swipeText")}><td>4444</td></tr>
								<tr className={css("swipeBlank")}><td></td></tr>
							</tbody>
						</table>
					</li>
				</ul>
			</div>
			
			<span className="asdf">asdasd</span>
			
			<ul>
				<li><NavLink exact to="/">Home</NavLink></li>
				<li><NavLink exact to="/about">About</NavLink></li>
				<li><NavLink to="/about/foo">About Foo</NavLink></li>
			</ul>
		</div>
	);
};

export default Menu;
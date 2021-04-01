import React from 'react';

const Prasadlist = (props) => {
	return (
		<div className="prasadstyle ma2 bg-light-pink grow shadow-4 dib pa2">
		<img src="cartoon.jpg" alt="Prasad"/>
		<h1> {props.name} </h1>
		<h2> {props.work} </h2>
		</div>
		)
}

export default Prasadlist;
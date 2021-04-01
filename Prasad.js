import React from 'react';
import './Prasad.css';
import Prasadlist from './Prasadlist';
import 'tachyons';


const Prasad = (props) => {

	const prasadlistarray = 
	[
		{
			id:1,
			name:"Prasad",
			work:"Developer"
		},
		{
			id:2,
			name:"Sachin",
			work:"Developer"
		},
		{
			id:3,
			name:"Santosh",
			work:"Developer"
		},
		{
			id:4,
			name:"Sandesh",
			work:"Developer"
		}
	]

				const arrayprasadcard = prasadlistarray.map( (prasadcard, i) =>
				{
				
				return(<Prasadlist key={i} id={prasadlistarray[i].name}
											name={prasadlistarray[i].name}
											work={prasadlistarray[i].work}/>)
						
						
				} )

		


				return(
					<div className ="mainpage" >
					<h1>Welcome To Developer's World</h1>
					{arrayprasadcard} 
					</div>
					)
}

export default Prasad;
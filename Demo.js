import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) => {
	//functional componet
	return <div className="div_style">
			<h1>Hi {props.name}</h1>
			</div>
}
/*
class Demo extends Component{
	//class component 
		render(){
			
			return <div className="div_style">
			<h1>Hi {this.props.name}</h1>
			</div>
				
		}
}
*/
export default Demo;

import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component{
	constrctor(props){
		super(props);
		this.state = {
			contactData: [{
				name: 'abc',
				phone: '010-4719-9304'
			}, {
				name: 'def',
				phone: '010-4719-9999'
			}
			]
		}
	}

	render(){
		return(
			<h1>Hello world</h1>
		);
	}
}
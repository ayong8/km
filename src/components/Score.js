import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';
import ScoreAdd from './ScoreAdd';
import ScoreInfo from './ScoreInfo';

export default class Score extends Component{
	constructor(props){
		super(props);
		this.state = {
			scoreData: [
				{
					date: "3/12",
					done: "Workout",
					score: 100		
				},
				{
					date: "3/12",
					done: "Workout",
					score: 100		
				}
			]
			
		}

		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(score){
		this.setState({
			scoreData: update(this.state.scoreData, { $push: [score] })
		});
		console.log("dd");
	}

	render(){
		return(
			<div>
				<ScoreAdd onAdd={this.handleAdd} />
				<ScoreInfo scoreData={this.state.scoreData}/>
			</div>
		);
	}
}

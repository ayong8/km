import React from 'react';

export default class ScoreAdd extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			date: '',
			score: 0,
			done: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	// input에 입력되는 값을 state에 실시간으로 업데이트
	handleChange(e){
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		console.log(nextState);
		this.setState(nextState);
	}

	// 입력이 완료된 값을 state에 최종적으로 반영
	// 최종반영은 상위컴포넌트와의 접점 메서드
	handleClick(){
		const score = {
			date: this.state.date,
			score: this.state.score,
			done: this.state.done
		}

		this.props.onAdd(score);
		//this.nameInput.focus();
		this.dateInput.value = "";
		this.scoreInput.value = "";
		this.doneInput.value = "";
	}

	render(){
		return(
			<div>
				<div className="score_today">
					<h3>Today's score</h3>
					<p></p>
				</div>
				<div>
					<input 
						type="text" 
						name="date"
						onChange={this.handleChange}
						ref={(ref) => { this.dateInput = ref }}
					/>
					<input 
						type="text" 
						name="score"
						onChange={this.handleChange}
						ref={(ref) => { this.scoreInput = ref }}
					/>
					<input 
						type="text" 
						name="done"
						onChange={this.handleChange}
						ref={(ref) => { this.doneInput = ref }}
					/>
					<button onClick={this.handleClick}>Add</button>
				</div>
			</div>
		);
	}
}
import React from 'react';
import Task from '../Task/index';

class ToDoList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			dataList : ["prout"]
		}
	}
	componentDidMount(){
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {
				this.setState({
					dataList : data.results
				})
			})
	}
	render(){
		const list = this.state.dataList.map((task, index) => (
			<Task key={index}>  </Task>
		))
		return(
			<ul className="todo-list">
			{list}
			</ul>
		)
	}
}

export default ToDoList;

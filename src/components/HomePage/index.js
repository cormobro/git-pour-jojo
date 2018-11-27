import React from 'react';
import ToDoList from '../ToDoList/index';
import './index.css';

const HomePage = () =>(
	<div className='page'>
	<h1 className="site-title">
	welcome to the dark side of the force	
	</h1>
	<h2 className="page-title">
	Our villain todo list
	</h2>
	<ToDoList />
	</div>
)

export default HomePage;

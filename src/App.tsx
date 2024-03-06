import { useState } from 'react';
import './App.css';
import Button from './components/Button';

export default function App() {
	const [totalValue, setTotalValue] = useState(0);
	const [nextValue, setNextValue] = useState(0);
	const [operator, setOperator] = useState('');

	function handleClickDigit(value = 0) {
		operator === ''
			? setTotalValue(totalValue * 10 + value)
			: setNextValue(nextValue * 10 + value);
	}
	function handleClickOperator(value = '') {
		setOperator(value);
	}
	function handleClickEquals() {
		if (operator === '+') {
			setTotalValue(totalValue + nextValue);
		} else if (operator === '-') {
			setTotalValue(totalValue - nextValue);
		} else if (operator === '*') {
			setTotalValue(totalValue * nextValue);
		} else if (operator === '/') {
			setTotalValue(totalValue / nextValue);
		}
		setOperator('');
		setNextValue(0);
	}

	return (
		<>
			<input value={nextValue === 0 ? totalValue : nextValue}></input>
			<div className="grid-container">
				<Button
					value="0"
					onClick={() => {
						handleClickDigit(0);
					}}
				></Button>
				<Button
					value="1"
					onClick={() => {
						handleClickDigit(1);
					}}
				></Button>
				<Button
					value="2"
					onClick={() => {
						handleClickDigit(2);
					}}
				></Button>
				<Button
					value="3"
					onClick={() => {
						handleClickDigit(3);
					}}
				></Button>
				<Button
					value="4"
					onClick={() => {
						handleClickDigit(4);
					}}
				></Button>
				<Button
					value="5"
					onClick={() => {
						handleClickDigit(5);
					}}
				></Button>
				<Button
					value="6"
					onClick={() => {
						handleClickDigit(6);
					}}
				></Button>
				<Button
					value="7"
					onClick={() => {
						handleClickDigit(7);
					}}
				></Button>
				<Button
					value="8"
					onClick={() => {
						handleClickDigit(8);
					}}
				></Button>
				<Button
					value="9"
					onClick={() => {
						handleClickDigit(9);
					}}
				></Button>
				<Button
					value="+"
					onClick={() => {
						handleClickOperator('+');
					}}
				></Button>
				<Button
					value="-"
					onClick={() => {
						handleClickOperator('-');
					}}
				></Button>
				<Button
					value="*"
					onClick={() => {
						handleClickOperator('*');
					}}
				></Button>
				<Button
					value="/"
					onClick={() => {
						handleClickOperator('/');
					}}
				></Button>
				<Button
					value="="
					onClick={() => {
						handleClickEquals();
					}}
				></Button>
			</div>
		</>
	);
}

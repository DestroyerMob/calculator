import { useState } from 'react';
import './App.scss';
import Button from './components/Button';

export default function App() {
	const [totalValue, setTotalValue] = useState('');

	function handleClickDigit(value = '') {
		setTotalValue(totalValue + value);
	}
	function handleClickEquals() {
		if (totalValue != '') {
			setTotalValue(eval(totalValue));
		}
	}

	return (
		<>
			<div className="center"></div>
			<div className="grid-container center">
				<input value={totalValue} className="equation-box center"></input>
				<Button
					value="7"
					onClick={() => {
						handleClickDigit('7');
					}}
				></Button>
				<Button
					value="8"
					onClick={() => {
						handleClickDigit('8');
					}}
				></Button>
				<Button
					value="9"
					onClick={() => {
						handleClickDigit('9');
					}}
				></Button>
				<Button
					value="+"
					onClick={() => {
						handleClickDigit('+');
					}}
				></Button>
				<Button
					value="4"
					onClick={() => {
						handleClickDigit('4');
					}}
				></Button>
				<Button
					value="5"
					onClick={() => {
						handleClickDigit('5');
					}}
				></Button>
				<Button
					value="6"
					onClick={() => {
						handleClickDigit('6');
					}}
				></Button>
				<Button
					value="-"
					onClick={() => {
						handleClickDigit('-');
					}}
				></Button>
				<Button
					value="1"
					onClick={() => {
						handleClickDigit('1');
					}}
				></Button>
				<Button
					value="2"
					onClick={() => {
						handleClickDigit('2');
					}}
				></Button>
				<Button
					value="3"
					onClick={() => {
						handleClickDigit('3');
					}}
				></Button>
				<Button
					value="*"
					onClick={() => {
						handleClickDigit('*');
					}}
				></Button>
				<Button
					value="."
					onClick={() => {
						handleClickDigit('.');
					}}
				></Button>
				<Button
					value="0"
					onClick={() => {
						handleClickDigit('0');
					}}
				></Button>
				<Button
					value="C"
					onClick={() => {
						setTotalValue('');
					}}
				></Button>
				<Button
					value="/"
					onClick={() => {
						handleClickDigit('/');
					}}
				></Button>
				<Button
					value="="
					onClick={() => {
						handleClickEquals();
					}}
					style="grid-item"
				></Button>
			</div>
		</>
	);
}

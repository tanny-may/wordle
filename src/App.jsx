import './App.css';
import { Board } from './components/Board.jsx';
import { Keyboard } from './components/Keyboard.jsx';
import { getKeyboardLettersStatus } from './domain/getKeyboardLettersStatus.js';
import { useState } from 'react';
import { GameOverNotification } from './components/GameOverNotification.jsx';
import { isRealWord } from './domain/isRealWord.js';
import { getRandomWord } from './domain/getRandomWord.js';

function App() {
	const [attempts, setAttempts] = useState(['alarm', 'bread', 'clock']);
	const [currentAttempt, setCurrentAttempt] = useState('');
	const [answer, setAnswer] = useState(getRandomWord);

	const wordLength = 5;
	const attemptsNumber = 6;

	const keyboardLettersStatus = getKeyboardLettersStatus(answer, attempts.slice(0, currentAttempt));

	function onLetterPress(letter) {
		setCurrentAttempt((currentAttempt) => {
			if (currentAttempt.length < 5) {
				return currentAttempt + letter;
			}
			return currentAttempt;
		});
	}

	function onEnterPress() {
		setCurrentAttempt((currentAttempt) => {
			if (currentAttempt.length === 5 && isRealWord(currentAttempt)) {
				setAttempts((attempts) => [...attempts, currentAttempt]);
				return '';
			}
			return currentAttempt;
		});
	}

	function onBackspacePress() {
		setCurrentAttempt((currentAttempt) => {
			return currentAttempt ? currentAttempt.slice(0, -1) : '';
		});
	}

	function playAgain() {
		setAnswer((prev) => getRandomWord(prev));
		setAttempts([]);
	}

	return (
		<div>
			<GameOverNotification
				attempts={attempts}
				answer={answer}
				playAgain={playAgain}
				attemptsNumber={attemptsNumber}
			/>

			<p>
				Guess the Wordle in {attemptsNumber} tries. Each guess must be a valid {wordLength}-letter word.
				<br />
				The color of the tiles will change to show how close your guess was to the word.
			</p>

			<Board
				wordLength={wordLength}
				attemptsNumber={attemptsNumber}
				attempts={attempts}
				currentAttempt={currentAttempt}
				answer={answer}
			/>

			<Keyboard
				lettersStatus={keyboardLettersStatus}
				onBackspacePress={onBackspacePress}
				onEnterPress={onEnterPress}
				onLetterPress={onLetterPress}
			/>
		</div>
	);
}

export default App;

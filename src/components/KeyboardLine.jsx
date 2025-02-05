/* eslint-disable react/prop-types */
import { getStyle } from '../domain/getStyle';
import s from './Keyboard.module.css';

export function KeyboardLine({ line, actionFunction, lettersStatus, before = null, after = null }) {
	return (
		<div className={s.rows}>
			{before}
			{line.map((letter, letterIndex) => (
				<button
					className={s.letter}
					key={letterIndex}
					style={getStyle(lettersStatus[letter])}
					onClick={() => actionFunction(letter)}
				>
					{letter}
				</button>
			))}
			{after}
		</div>
	);
}

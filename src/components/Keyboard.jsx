/* eslint-disable react/prop-types */
import { ActionButton } from './ActionButton';
import { KeyboardLine } from './KeyboardLine';
import { useEffect } from 'react';

export function Keyboard({ lettersStatus, onLetterPress, onEnterPress, onBackspacePress }) {
	
	useEffect(() => {
		window.addEventListener('keydown', (event) => {
			if (event.key === 'Enter') {
				event.preventDefault();
				onEnterPress()
			}
			if (event.key === 'Backspace') {
				onBackspacePress()
			}
			if (/^[A-Z]$/i.test(event.key)) {
				onLetterPress(event.key)
			}
		});
	}, []);


	return (
		<div>
			<KeyboardLine
				line={['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']}
				actionFunction={onLetterPress}
				lettersStatus={lettersStatus}
			/>
			<KeyboardLine
				line={['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']}
				actionFunction={onLetterPress}
				lettersStatus={lettersStatus}
			/>

			<KeyboardLine
				line={['z', 'x', 'c', 'v', 'b', 'n', 'm']}
				actionFunction={onLetterPress}
				lettersStatus={lettersStatus}
				before={<ActionButton actionName={'Enter'} actionFunction={onEnterPress} />}
				after={<ActionButton actionName={'Backspace'} actionFunction={onBackspacePress} />}
			/>
		</div>
	);
}

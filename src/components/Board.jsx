/* eslint-disable react/prop-types */
import { ColoredLine } from './ColoredLine';
import { CurrentLine } from './CurrentLine';
import { EmptyLine } from './EmptyLine';

export function Board({ wordLength, attempts, currentAttempt, answer }) {
	const emptyLinesNumber = attempts.length === 6 ? 0 : 6 - attempts.length - 1;

	return (
		<div>
			{attempts.map((attempt, i) => (
				<ColoredLine length={wordLength} word={attempt} answer={answer} key={i} />
			))}
			{attempts.length !== 6 && <CurrentLine length={wordLength} word={currentAttempt} />}
			{Array(emptyLinesNumber)
				.fill()
				.map((_, i) => (
					<EmptyLine length={wordLength} key={i} />
				))}
		</div>
	);
}
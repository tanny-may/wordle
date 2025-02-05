/* eslint-disable react/prop-types */
import { getStyle } from '../domain/getStyle';
import { getBoardLettersStatus } from '../domain/getBoardLettersStatus';
import s from './Line.module.css';

export function ColoredLine({ word, answer }) {
	const lettersStatus = getBoardLettersStatus(answer, word);
	return (
		<div className={s.cells}>
			{lettersStatus.map(({ status, letter }, i) => (
				<div className={s.cell} key={i} style={getStyle(status)}>
					{letter}
				</div>
			))}
		</div>
	);
}
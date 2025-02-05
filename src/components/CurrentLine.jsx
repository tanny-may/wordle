/* eslint-disable react/prop-types */
import s from './Line.module.css';

export function CurrentLine({ length, word }) {
	return (
		<div className={s.cells}>
			{Array(length).fill().map((_, i) => (
				<div className={s.cell} key={i} style={{border:'1px solid black'}}>
					{i < word.length ? word[i] : null}
				</div>
			))}
		</div>
	);
}

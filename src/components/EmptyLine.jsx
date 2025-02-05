/* eslint-disable react/prop-types */
import s from './Line.module.css';

export function EmptyLine({ length }) {
	return (
		<div className={s.cells}>
			{Array(length).fill().map((_, i) => (
				<div className={s.cell} key={i} />
			))}
		</div>
	);
}

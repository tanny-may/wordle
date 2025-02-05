import { getLettersStatus } from './getBoardLettersStatus';

export function colorString(answer, word) {
	const lettersStatus = getLettersStatus(answer, word);
	const style = { backgroundColor: 'grey' };

	for (let letter of lettersStatus) {
		if (letter.status === 'correct') {
			style.backgroundColor = 'green';
		}
		if (letter.status === 'present') {
			style.backgroundColor = 'yellow';
		}
		return style;
	}
}

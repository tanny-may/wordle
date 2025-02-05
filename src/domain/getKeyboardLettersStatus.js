import { getBoardLettersStatus } from './getBoardLettersStatus.js';

export function getKeyboardLettersStatus(answer, attempts) {
	const statuses = attempts.flatMap((attempt) => getBoardLettersStatus(answer, attempt));

	const newStatuses = {};

	statuses.forEach(({ status, letter }) => {
		if (
			status === 'correct' ||
			(status === 'present' && newStatuses[letter] !== 'correct') ||
			(status === 'absent' && !newStatuses[letter])
		) {
			newStatuses[letter] = status;
		}
	});

	return newStatuses;
}
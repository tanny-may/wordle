import { WORDS } from './words';

export function getRandomWord(prevWord = null) {
	while (true) {
		const word = WORDS[Math.floor(Math.random() * WORDS.length)];
		if (word !== prevWord) {
			return word;
		}
	}
}
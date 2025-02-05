export function getBoardLettersStatus(answer, word) {
	const res = [];
	const counter = {};

	for (let letter of answer) {
		counter[letter] ??= 0;
		counter[letter]++;
	}

	for (let i = 0; i < word.length; i++) {
		if (word[i] === answer[i]) {
			res[i] = { letter: word[i], status: 'correct' };
			counter[word[i]] ??= 0;
			counter[word[i]]--;
		}
	}

	for (let i = 0; i < word.length; i++) {
		if (res[i]) continue;

		if (counter[word[i]] > 0) {
			res[i] = { letter: word[i], status: 'present' };
            counter[word[i]]--;
		} else {
			res[i] = { letter: word[i], status: 'absent' };
		}
	}

	return res;
}


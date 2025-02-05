import { getBoardLettersStatus } from './getBoardLettersStatus';
import { expect, test, describe } from 'vitest';

describe('getBoardLettersStatus', () => {
	describe('answer === "peace"', () => {
		test('word === "salad"', () => {
			const output = [
				{ letter: 's', status: 'absent' },
				{ letter: 'a', status: 'present' },
				{ letter: 'l', status: 'absent' },
				{ letter: 'a', status: 'absent' },
				{ letter: 'd', status: 'absent' },
			];
			expect(getBoardLettersStatus('peace', 'salad')).toEqual(output);
		});
		test('word === "eagle"', () => {
			const output = [
				{ letter: 'e', status: 'present' },
				{ letter: 'a', status: 'present' },
				{ letter: 'g', status: 'absent' },
				{ letter: 'l', status: 'absent' },
				{ letter: 'e', status: 'correct' },
			];
			expect(getBoardLettersStatus('peace', 'eagle')).toEqual(output);
		});
		test('word === "greed"', () => {
			const output = [
				{ letter: 'g', status: 'absent' },
				{ letter: 'r', status: 'absent' },
				{ letter: 'e', status: 'present' },
				{ letter: 'e', status: 'present' },
				{ letter: 'd', status: 'absent' },
			];
			expect(getBoardLettersStatus('peace', 'greed')).toEqual(output);
		});
		test('word === "sport"', () => {
			const output = [
				{ letter: 's', status: 'absent' },
				{ letter: 'p', status: 'present' },
				{ letter: 'o', status: 'absent' },
				{ letter: 'r', status: 'absent' },
				{ letter: 't', status: 'absent' },
			];
			expect(getBoardLettersStatus('peace', 'sport')).toEqual(output);
		});
		test('word === "award"', () => {
			const output = [
				{ letter: 'a', status: 'absent' },
				{ letter: 'w', status: 'absent' },
				{ letter: 'a', status: 'correct' },
				{ letter: 'r', status: 'absent' },
				{ letter: 'd', status: 'absent' },
			];
			expect(getBoardLettersStatus('peace', 'award')).toEqual(output);
		});
		test('word === "peace"', () => {
			const output = [
				{ letter: 'p', status: 'correct' },
				{ letter: 'e', status: 'correct' },
				{ letter: 'a', status: 'correct' },
				{ letter: 'c', status: 'correct' },
				{ letter: 'e', status: 'correct' },
			];
			expect(getBoardLettersStatus('peace', 'peace')).toEqual(output);
		});
	});
});

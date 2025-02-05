import { getKeyboardLettersStatus } from './getKeyboardLettersStatus';
import { expect, test, describe } from 'vitest';

describe('getKeyboardLettersStatus', () => {
	describe('', () => {
		test('answer === "corer"', () => {
			const output = {
                a: 'absent',
                l: 'absent',
                r: 'present',
                m: 'absent',
                b: 'absent',
                e: 'present',
                d: 'absent',
                c: 'correct',
                o: 'present',
                k: 'absent',
                g: 'absent'
            };
			expect(getKeyboardLettersStatus('corer', ['alarm', 'bread', 'clock', 'eagle'])).toEqual(output);
		});
        test('answer === "eagle"', () => {
			const output = {
                a: 'correct',
                l: 'correct',
                r: 'absent',
                m: 'absent',
                b: 'absent',
                e: 'correct',
                d: 'absent',
                c: 'absent',
                o: 'absent',
                k: 'absent',
                g: 'correct'
            };
			expect(getKeyboardLettersStatus('eagle', ['alarm', 'bread', 'clock', 'eagle'])).toEqual(output);
		});
	
	});
});
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test, describe, vi } from 'vitest';
import { Board } from './Board';

vi.mock('./ColoredLine.jsx', () => {
	return { ColoredLine: () => <div>ColoredLine</div> };
});
vi.mock('./CurrentLine.jsx', () => {
	return { CurrentLine: () => <div>CurrentLine</div> };
});
vi.mock('./EmptyLine.jsx', () => {
	return { EmptyLine: () => <div>EmptyLine</div> };
});

afterEach(cleanup);

describe('Board Component', () => {
	test('Board рисует шесть полностью введенных слов', () => {
		const attempts = ['aaaa1', 'aaaa2', 'aaaa3', 'aaaa4', 'aaaa5', 'aaaa6'];

		render(<Board wordLength={5} attempts={attempts} currentAttempt='' answer='aaaaa' />);

		expect(screen.queryAllByText('ColoredLine')).toHaveLength(6);
		expect(screen.queryAllByText('CurrentLine')).toHaveLength(0);
		expect(screen.queryAllByText('EmptyLine')).toHaveLength(0);
	});

	test('Board рисует три полностью введенных слова, одну строку ввода и две пустых строки', () => {
		const attempts = ['aaaa1', 'aaaa2', 'aaaa3'];

		render(<Board wordLength={5} attempts={attempts} currentAttempt='aaaa4' answer='aaaaa' />);

		expect(screen.queryAllByText('ColoredLine')).toHaveLength(3);
		expect(screen.queryAllByText('CurrentLine')).toHaveLength(1);
		expect(screen.queryAllByText('EmptyLine')).toHaveLength(2);
	});

	test('Board рисует пять полностью введенных слова, одну строку ввода и ноль пустых строк', () => {
		const attempts = ['aaaa1', 'aaaa2', 'aaaa3', 'aaaa4', 'aaaa5'];

		render(<Board wordLength={5} attempts={attempts} currentAttempt='aaaa6' answer='aaaaa' />);

		console.log('ColoredLine Count:', screen.queryAllByText('ColoredLine').length);
		console.log('CurrentLine Count:', screen.queryAllByText('CurrentLine').length);
		console.log('EmptyLine Count:', screen.queryAllByText('EmptyLine').length);

		expect(screen.queryAllByText('ColoredLine')).toHaveLength(5);
		expect(screen.queryAllByText('CurrentLine')).toHaveLength(1);
		expect(screen.queryAllByText('EmptyLine')).toHaveLength(0);
	});
});

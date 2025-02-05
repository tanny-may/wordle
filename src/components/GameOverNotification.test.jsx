/* eslint-disable no-undef */
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test, describe, vi } from 'vitest';
import { GameOverNotification } from './GameOverNotification';

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

describe('GameOverNotification', () => {
	const attemptsNumber = 6;
	const answer = 'camel';

	test('GameOverNotification ничего не отображает, если игра ещё не закончена', () => {
		const attempts = ['table', 'eagle'];

		render(
			<GameOverNotification
				attempts={attempts}
				answer={answer}
				attemptsNumber={attemptsNumber}
				playAgain={() => {}}
			/>
		);

		expect(screen.queryByText(/You win/i)).to.not.exist;
		expect(screen.queryByText(/You lose/i)).to.not.exist;
		expect(screen.queryByText(/Start game again/i)).to.not.exist;
	});

	test('GameOverNotification отображает надпись о проигрыше, если пользователь не угадал загаданное слово, и кнопку играть ещё раз', () => {
		const attempts = ['table', 'eagle', 'board', 'clock', 'alarm', 'bread'];

		render(
			<GameOverNotification
				attempts={attempts}
				answer={answer}
				attemptsNumber={attemptsNumber}
				playAgain={() => {}}
			/>
		);

		expect(screen.queryByText(/You lose/i)).to.exist;
		expect(screen.queryByText(/Start game again/i)).to.exist;
	});

	test('GameOverNotification отображает надпись о выигрыше, если пользователь не угадал загаданное слово, и кнопку играть ещё раз', () => {
		const attempts = ['table', 'eagle', 'board', 'clock', 'alarm', 'camel'];

		render(
			<GameOverNotification
				attempts={attempts}
				answer={answer}
				attemptsNumber={attemptsNumber}
				playAgain={() => {}}
			/>
		);

		expect(screen.queryByText(/You win/i)).to.exist;
		expect(screen.queryByText(/Start game again/i)).to.exist;
	});

	test('Найти кнопку Start game again, при нажатии поле должно очиститься', () => {
		const attempts = ['table', 'eagle', 'board', 'clock', 'alarm', 'camel'];

		const playAgain = vi.fn();
		// console.dir(playAgain.mock.calls);

		render(
			<GameOverNotification
				attempts={attempts}
				answer={answer}
				attemptsNumber={attemptsNumber}
				playAgain={playAgain}
			/>
		);

		const button = screen.getByRole('button');

		expect(playAgain).toHaveBeenCalledTimes(0);
		button.click();
		expect(playAgain).toHaveBeenCalledTimes(1);

		// https://jestjs.io/docs/29.5/expect
		// https://vitest.dev/guide/mocking

		// https://kentcdodds.com/testimony
		// https://kentcdodds.com/

		// https://sitnik.ru/ru/
	});
});

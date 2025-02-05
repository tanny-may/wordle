/* eslint-disable react/prop-types */

export function GameOverNotification({ attempts, answer, attemptsNumber, playAgain }) {
	const gameOver = attempts.length === attemptsNumber;

	if (!gameOver) {
		return null;
	}
	return (
		<div>
			<h2>
				{attempts.includes(answer)
					? 'You win'
					: `You lose 
                (answer: ${answer})`}
			</h2>

			<button onClick={() => playAgain()}>Start game again</button>
		</div>
	);
}

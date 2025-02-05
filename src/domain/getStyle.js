const status2color = {
	correct: 'green',
	present: 'yellow',
	absent: 'gray',
};

export function getStyle(status) {
	// let backgroundColor = 'lightgray';

	// if (status === 'correct') {
	// 	backgroundColor = 'green';
	// } else if (status === 'present') {
	// 	backgroundColor = 'yellow';
	// } else if (status === 'absent') {
	// 	backgroundColor = 'gray';
	// }

	return { backgroundColor: status2color[status] ?? 'lightgray' };
}

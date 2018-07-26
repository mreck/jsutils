const isString = require('./is').string;

function updateInputs(root, values) {
	const node = isString(root) ? document.querySelector(root) : root;
	const inputs = node.querySelectorAll('input');

	for (let i = 0; i < inputs.length; i++) {
		const val = values[inputs[i].name];

		if (val !== undefined) {
			switch (inputs[i].type) {
				case 'checkbox':
					inputs[i].checked = Boolean(val);
					break;
				case 'text':
				case 'password':
					inputs[i].value = val;
					break;
			}
		}
	}
}

function parseInputs(root) {
	const node = isString(root) ? document.querySelector(root) : root;
	const inputs = node.querySelectorAll('input');

	const values = {};

	for (let i = 0; i < inputs.length; i++) {
		const name = inputs[i].name;

		switch (inputs[i].type) {
			case 'checkbox':
				values[name] = inputs[i].checked;
				break;
			case 'text':
			case 'password':
				values[name] = inputs[i].value;
				break;
		}
	}

	return values;
}

module.exports = {
	updateInputs,
	parseInputs,
};

module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true,
	},
	'extends': 'eslint:recommended',
	'rules': {
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'linebreak-style': ['error', 'unix'],
		'no-var': ['error'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
	}
};

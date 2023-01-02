module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'eslint-config-prettier',
		'prettier'
	],
	settings: {
		react: {
			version: 'detect'
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		}
	},
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint', 'import'],
	rules: {
		'import/no-unresolved': 'error',
		'react/react-in-jsx-scope': 'off',
		camelcase: 'error',
		'spaced-comment': 'error',
		quotes: ['error', 'single'],
		'no-duplicate-imports': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error'
	}
};

// __test__/Component.test.tsx

import { render, screen } from '@testing-library/react';
import React from 'react';
import { Component } from '../src/Component';

describe('Tests on <Component/> component', (): void => {
	test('renders Vite in h1', (): void => {
		render(<Component />);
		const h1Element = screen.getByText(/Vite/i);
		expect(h1Element).toBeTruthy();
	});
});

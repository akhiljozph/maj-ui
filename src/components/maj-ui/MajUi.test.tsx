import '@testing-library/jest-dom';

import { act, render } from '@testing-library/react';

import MajUi from './MajUi';

const container: HTMLDivElement = document.createElement('div');

describe('It should render MAJui', () => {
    beforeEach(async () => {
        document.body.appendChild(container);

        await act(async () => {
            render(<MajUi />);
        })
    });
});
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import MajUi from './MajUi';

test('Renders the MajUi page', () => {
    render(<MajUi backgroundColor="#000000" color="#ffc40c" />)
    expect(true).toBeTruthy()
})

describe(MajUi, () => {
    test('renders the correct value', () => {
        const props = {
            color: '#ffc40c',
            backgroundColor: '#000000'
        }
        render(<MajUi {...props} />);

        expect(document.getElementsByClassName('maj-ui')[0]).toBeInTheDocument();
    });
});
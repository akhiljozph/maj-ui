import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import MajButton from './MajButton';

describe("MajButton", () => {
    it("should render the name", () => {
        const { getByText } = render(<MajButton link='http://127.0.0.1:8090'>Button</MajButton>);
        expect(getByText("Button")).toBeInTheDocument();
    });
});
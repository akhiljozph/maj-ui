import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import MajButton from './MajButton';

describe("MajButton", () => {
    it("should render the name", () => {
        const { getByText } = render(<MajButton />);
        expect(getByText("Button")).toBeInTheDocument();
    });
});
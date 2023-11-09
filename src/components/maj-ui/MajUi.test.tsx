import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import MajUi from './MajUi';

describe("MAJui", () => {
    it("should render the name", () => {
        const { getByText } = render(<MajUi />);
        expect(getByText("MAJui")).toBeInTheDocument();
    });
});
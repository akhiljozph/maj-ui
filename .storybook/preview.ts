import type { Preview } from "@storybook/react";

import "./styles.css";

const preview: Preview = {
    parameters: {
        layout: "centered",
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    tags: ["autodocs"],
};

export default preview;

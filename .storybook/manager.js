import React from "react";
import { addons, types } from "@storybook/manager-api";

import Brands from "./addons/brands/Brands";

addons.register("my/toolbar", () => {
  addons.add("my-toolbar-addon/toolbar", {
    title: "Example Storybook toolbar",
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ({ active }) => <Brands active={active} />,
  });
});

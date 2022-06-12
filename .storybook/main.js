//@ts-check

/** @type {import('@storybook/core-common').StorybookConfig} */
const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
    modernInlineRender: true,
  },
};

module.exports = config;

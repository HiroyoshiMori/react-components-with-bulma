import {Preview} from "@storybook/react";
import DocumentationTemplate from './DocumentationTemplate.mdx';
import '../node_modules/bulma/css/bulma.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      // sort: 'requiredFirst',
      hideNoControlsWarning: true,
      expanded: true,
      // matchers: {
      //   color: /(background|color)$/i,
      //   date: /Date$/i,
      // },
      // exclude: ['classes', 'attributes', 'datasets'],
    },
    docs: {
      page: DocumentationTemplate,
      toc: true,
    },
  },
};

export default preview;

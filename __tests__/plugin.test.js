const postcss = require('postcss');
const merge = require('lodash.merge');
const tailwindcss = require('tailwindcss');
const tailwindFilterUtilities = require('..');

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      merge(
        {
          theme: {
            screens: {
              sm: '640px',
            },
          },
          corePlugins: false,
          plugins: [tailwindFilterUtilities],
        },
        config
      )
    )
  )
    .process('@tailwind utilities', {
      from: undefined,
    })
    .then((result) => {
      return result.css;
    });
};

test('it generates everything as expected', async () => {
  expect(await generatePluginCss()).toMatchSnapshot();
});

const plugin = require('tailwindcss/plugin');
const defaultConfig = require('./config.js');
const kebabCase = require('lodash.kebabcase');

function unique(array) {
  return Array.from(new Set(array));
}

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return [value];
}

module.exports = plugin(function ({ addUtilities, variants, e, theme }) {
  const generate = ({ themeKey, prefix, cssProperty }) => {
    const filters = theme(themeKey);

    const utilities = Object.fromEntries(
      filters.flatMap((filter) => {
        const entries = Object.entries(theme(filter));

        const kebabFilter = kebabCase(filter);

        return entries.map(([modifier, value]) => [
          `.${e(
            `${prefix}${kebabFilter}${
              modifier === 'default' ? '' : `-${modifier}`
            }`
          )}`,
          {
            [`--${prefix}${kebabFilter}`]: toArray(value)
              .map((value) => `${kebabFilter}(${value})`)
              .join(' '),
          },
        ]);
      })
    );

    const allUtilities = Object.keys(utilities).join(', ');

    const allCssVariables = unique(
      Object.entries(utilities).map(([, css]) => Object.keys(css)[0])
    );

    addUtilities(
      {
        [allUtilities]: Object.fromEntries([
          ...allCssVariables.flatMap((cssVariable) => [
            [cssVariable, 'var(--tailwind-empty,/*!*/ /*!*/)'],
          ]),
          [
            cssProperty,
            allCssVariables
              .map((cssVariable) => `var(${cssVariable})`)
              .join(' '),
          ],
        ]),
        ...utilities,
      },
      variants(themeKey)
    );
  };

  generate({
    themeKey: 'filters',
    prefix: '',
    cssProperty: 'filter',
  });

  generate({
    themeKey: 'bgFilters',
    prefix: 'bg-',
    cssProperty: 'backdrop-filter',
  });
}, defaultConfig);

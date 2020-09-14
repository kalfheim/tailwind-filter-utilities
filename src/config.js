module.exports = {
  theme: {
    filters: ['blur', 'brightness', 'grayscale', 'dropShadow'],
    bgFilters: ['blur', 'brightness', 'grayscale'],
    blur: {
      xs: '0.5px',
      sm: '1px',
      default: '2px',
      md: '4px',
      lg: '10px',
      xl: '22px',
      '2xl': '48px',
    },
    brightness: {
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1',
      125: '1.25',
      150: '1.5',
      175: '1.75',
    },
    // opacity: {
    //   0: 0,
    //   25: 0.25,
    //   50: 0.5,
    //   75: 0.75,
    //   100: 1,
    // },
    grayscale: {
      0: 0,
      25: 0.25,
      50: 0.5,
      75: 0.75,
      default: 1,
    },
    dropShadow: {
      xs: '0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      default: [
        '0 1px 3px rgba(0, 0, 0, 0.1)',
        '0 1px 2px rgba(0, 0, 0, 0.06)',
      ],
      md: ['0 3px 5px rgba(0, 0, 0, 0.1)', '0 1px 3px rgba(0, 0, 0, 0.06)'],
      lg: ['0 7px 12px rgba(0, 0, 0, 0.1)', '0 2px 4px rgba(0, 0, 0, 0.05)'],
      xl: ['0 15px 20px rgba(0, 0, 0, 0.1)', ' 0 5px 5px rgba(0, 0, 0, 0.04)'],
      '2xl': '0 13px 36px rgba(0, 0, 0, 0.25)',
    },
  },
  variants: {
    // filters: ['hover'],
    // bgFilters: ['hover'],
  },
};

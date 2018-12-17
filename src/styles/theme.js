const colors = {
  primary: '#0606f9',
  secondary: '#e2dfcf',
  black: '#0d0d0d',
  lightGray: '#f1f1f1',
  darkGray: '#555',
  white: '#ffffff',
};

const fonts = {
  monospace: `'Space Mono', monospace`,
  sans: `'Work Sans', sans-serif`,
};

const darkTheme = {
  colors: {
    background: colors.primary,
    primaryText: colors.white,
    secondaryText: colors.secondary,
    emphasizedText: colors.secondary,
  },
  fonts: {
    ...fonts,
  },
};

// @todo: Theme properties should override the default theme, so not everything
//        has to be redefined for each theme.
const lightTheme = {
  colors: {
    background: colors.white,
    primaryText: colors.black,
    secondaryText: colors.darkGray,
    emphasizedText: colors.darkGray,
  },
  fonts: {
    ...fonts,
  },
};

const theme = variant => {
  if (variant === 'light') {
    return lightTheme;
  } else {
    return darkTheme;
  }
};

export default theme;

const colors = {
  primary: '#0606f9',
  secondary: '#e2dfcf',
  black: '#0d0d0d',
  gray: '#f1f1f1',
  white: '#ffffff',
};

const fonts = {
  monospace: "'Overpass Mono', monospace",
  sans: "'Overpass', sans-serif",
};

const darkTheme = {
  colors: {
    background: colors.primary,
    primaryText: colors.white,
    secondaryText: colors.secondary,
  },
  fonts: {
    default: fonts.sans,
    monospace: fonts.monospace,
  },
};

// @todo: Theme properties should override the default theme, so not everything
//        has to be redefined for each theme.
const lightTheme = {
  colors: {
    background: colors.white,
    primaryText: colors.black,
    secondaryText: colors.gray,
  },
  fonts: {
    default: fonts.sans,
    monospace: fonts.monospace,
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

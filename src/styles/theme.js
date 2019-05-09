const colors = {
  ice: 'hsl(240,66%,52%)',
  cool: 'hsl(240,15%,90%)',
  hot: 'hsl(30, 66%, 52%)',
  warm: 'hsl(29,30%,85%)',
  black: 'hsl(240,40%,10%)',
  darkGray: 'hsl(240,10%,25%)',
  lightGray: 'hsl(240,40%,97%)',
  white: '#ffffff',
};

const defaultTheme = {
  colors: {
    background: colors.white,
    primaryText: colors.black,
    secondaryText: colors.darkGray,
    emphasizedText: colors.darkGray,
  },
  fonts: {
    monospace: `'Space Mono', monospace`,
    sans: `'Work Sans', sans-serif`,
  },
};

const darkTheme = {
  ...defaultTheme,
  colors: {
    background: colors.ice,
    primaryText: colors.white,
    secondaryText: colors.warm,
    emphasizedText: colors.hot,
  },
};

const theme = variant => {
  if (variant === 'dark') {
    return darkTheme;
  } else {
    return defaultTheme;
  }
};

export default theme;

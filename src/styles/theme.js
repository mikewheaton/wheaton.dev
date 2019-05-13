export const palette = {
  ice: 'hsl(240, 65%, 50%)',
  cool: 'hsl(240, 15%, 90%)',
  fire: 'hsl(30, 65%, 50%)',
  warm: 'hsl(30, 30%, 85%)',
  black: 'hsl(240, 40%, 10%)',
  darkGray: 'hsl(240, 10%, 30%)',
  lightGray: 'hsl(240, 40%, 96%)',
  white: 'hsl(0, 0%, 100%)',
};

export const fonts = {
  monospace: `'Space Mono', monospace`,
  sans: `'Work Sans', sans-serif`,
};

// @todo This naming system doesn't scale well. Consider making it a function where
// size(0) is 1rem and can move up and down the scale like size(4) and size(-2).
export const sizes = {
  xxLarge: '3.157rem',
  xLarge: '2.369rem',
  large: '1.777rem',
  medium: '1.333rem',
  small: '1rem',
  xSmall: '0.75rem',
  xxSmall: '0.563rem',
  xxxSmall: '0.178rem',
};

export const lineHeights = {
  wide: 1.8,
  regular: 1.5,
  narrow: 1.2,
};

const defaultTheme = {
  colors: {
    background: palette.white,
    primaryText: palette.black,
    secondaryText: palette.darkGray,
    emphasizedText: palette.darkGray,
  },
  palette,
  fonts: {
    ...fonts,
  },
  sizes: {
    ...sizes,
  },
  lineHeights: {
    ...lineHeights,
  },
};

const darkTheme = {
  ...defaultTheme,
  colors: {
    background: palette.ice,
    primaryText: palette.white,
    secondaryText: palette.warm,
    emphasizedText: palette.fire,
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

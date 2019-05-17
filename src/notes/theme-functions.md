---
path: '/notes/theme-functions'
date: '2019-05-17'
title: 'Using Functions in Themes'
draft: false
---

As you're building a [Styled Components theme](styled-components-theming), you'll come across situations where you have a range of values. For example, a set of grays running from white to black or font sizes from tiny to gigantic.

The simplest way to implement this would be to give each one an entry in the theme.

```javascript
const theme = {
  neutralWhite: "#ffffff",
  neutralLighterest: "#fafafa",
  neutralLightest: "#f5f5f5",
  neutralLighter: "#eeeeee",
  neutralLight: "#e0e0e0",
  neutral: "#bdbdbd",
  neutralDark: "#9e9e9e",
  neutralDarker: "#757575",
  neutralDarkest: "#616161",
  neutralDarkerest "#424242",
  neutralAlmostBlack: "#212121"
}
```

To be fair, I've made these intentionally bad. But it's a challenge to name a set like this. Can the names communicate the relative lightness of each color? What happens <strike>if</strike> when a new gray comes along and has to be added to the middle? Hello, `neutralDarkerest2`.

## Numbered values

One approach to solving this problem is to drop names in favor of numbers. This is what [Material Design](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) does and what [Fabric](https://developer.microsoft.com/en-us/fabric#/styles/web/colors/neutrals) recently moved to. It solves the problem of knowing how two colors relate; the larger number is darker. Adding a new color that's between 400 and 500? Name it 450 and move on to more interesting things.

An even simpler approach is to name the colors 0, 1, 2, 3, etc. If a new color is needed you can shift the existing colors (e.g. 3 is now 4) and do a quick find-replace to update your app. This might not scale for design systems that span many apps, but it's a good solution for prototyping or building a small app.

This could look like:

```javascript
const theme = {
  neutral0: "#ffffff",
  neutral1: "#fafafa",
  neutral2: "#f5f5f5",
  ...
};
```

While it will work fine, it's awfully repetitive. Let's see if we can do better.

## Using an array

One great thing about theming with Styled Components is that the theme is a JavaScript object like any other. While it most often contains primitives like strings and numbers, there's nothing stopping us from putting an array or function in there.

```javascript
const theme = {
  gray: [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    ...
  ]
};
```

It's now possible to get a value from the array within a component's styles by calling `${props => props.theme.gray[2]}`. Better!

## Calling an array from a function

There are cases where what you really want in your theme is a function. For example, the Polished library provides a [modularScale helper](https://polished.js.org/docs/#modularscale) that makes it easy to calculate a [relative scale](https://www.modularscale.com/?1&em&1.333) of values.

```javascript
import { modularScale } from "polished";

const theme = {
  size(step) {
    return modularScale(step, "1rem");
  }
};
```

This would be called as `${props => props.theme.size(2)}`. This is much like how our array was called above, but with parantheses instead of square brackets.

While this makes sense, it can be difficult to remember which parts of the theme are arrays and which are functions. So let's write a little function that takes an index argument and returns the array at that index.

```javascript
const theme = {
  gray(step) {
    return [
      "#ffffff",
      "#fafafa",
      "#f5f5f5",
      "#eeeeee",
      "#e0e0e0",
      "#bdbdbd",
      "#9e9e9e",
      "#757575",
      "#616161",
      "#424242",
      "#212121"
    ][step + 1];
  }
};
```

Now we can use the same syntax when referencing an array or a function in our theme.

You may have noticed that it's accessing the value  at `step + 1`. Like most programming languages, JavaScript uses [zero-based arrays](https://blog.kevinchisholm.com/javascript/javascript-array-length-always-one-higher/) where the first element is at position 0. This is confusing for anyone on your team who's not a developer (the design documentation is never going to start at 0 unless you insist on it) so I recommend starting at 1 instead. It's less hassle for everyone.

## Next steps
- If you haven't tried theming with Styled Components, follow along with [my tutorial](styled-components-theming).
- Try adding a ramp of type sizes. E.g. 12px, 14px, 16px, 20px, 24px
- What if you wanted `myFunction(0)` to return a value from the middle of the range instead of the first value? Could you update the function so that it's possible to call `myFunction(-2)` for lower values?
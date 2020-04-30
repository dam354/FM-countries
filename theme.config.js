// theme.config.js
const { ThemeBuilder, Theme } = require('tailwindcss-theming');

const mainTheme = new Theme().default().colors({
  headerbg: 'hsl(0, 0%, 100%)',
  headercolor: 'hsl(200, 15%, 8%)',
  appbg: 'hsl(0, 0%, 98%)',
  appcolor: 'hsl(200, 15%, 8%)',
  inputs: 'hsl(0, 0%, 100%)',
  inputtext: 'hsl(0, 0%, 52%)',
  shadows: '#efefef',
});
const lightTheme = new Theme().colors({
  headerbg: 'hsl(0, 0%, 100%)',
  headercolor: 'hsl(200, 15%, 8%)',
  appbg: 'hsl(0, 0%, 98%)',
  appcolor: 'hsl(200, 15%, 8%)',
  inputs: 'hsl(0, 0%, 100%)',
  inputtext: 'hsl(0, 0%, 52%)',
  shadows: '#efefef',
});
const darkTheme = new Theme().colors({
  headerbg: 'hsl(209, 23%, 22%)',
  headercolor: 'hsl(0, 0%, 100%)',
  appbg: 'hsl(207, 26%, 17%)',
  appcolor: 'hsl(0, 0%, 100%)',
  inputs: 'hsl(209, 23%, 22%)',
  inputtext: `hsl(0, 0%, 100%)`,
  shadows: '#1e2b34',
});

module.exports = new ThemeBuilder()
  .asDataThemeAttribute()
  .default(mainTheme)
  .light(lightTheme)
  .dark(darkTheme);

//   - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

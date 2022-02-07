// =========================== Colores
const principal = "#0055e6";
const alternate = "#3c6fcd";
const primary = "#0275d8";
const secondary = "#6c757d";
const success = "#28a745";
const warning = "#f0ad4e";
const info = "#17a2b8";
const danger = "#dc3545";
const black = "#000000";
const dark = "#343a40";
const gray = "#bbbbbb";
const light = "#f7f7f7";
const white = "#ffffff";

// =============== Porcentaje de opacidad
const o5 = "0d"
const o10 = "1a"
const o15 = "26"
const o20 = "33"
const o25 = "40"
const o30 = "4d"
const o35 = "59"
const o40 = "66"
const o45 = "73"
const o50 = "80"
const o55 = "8c"
const o60 = "99"
const o65 = "a6"
const o70 = "b3"
const o75 = "bf"
const o80 = "cc"
const o85 = "d9"
const o90 = "e6"
const o95 = "f2"


const mixture = (color, opacity) => {
  const colorMix = color+opacity
  //console.log('HEXA COLOR: ' + colorMix);
  return colorMix
}

// ------------------------------------ Buttons Colors
export const btnColors = {
  principal: principal,
  alternate: alternate,
  primary: primary,
  primaryT1: mixture(primary,o5),
  primaryT2: mixture(primary,o10),
  secondary: secondary,
  success: success,
  successT1: mixture(success,o5),
  successT2: mixture(success,o10),
  warning: warning,
  warningT1: mixture(warning,o5),
  info: info,
  danger: danger,
  black: black,
  blackHover: mixture(dark,o5),
  white: white,
  whiteHover: mixture(white,o5),
};

// ------------------------------------ Background Colors
export const backColors = {
  gray: light,
  white: white,
  gray: gray,
  grayH: mixture(gray,o75),
  grayM: mixture(gray,o50),
  grayL: mixture(gray,o25),
  grayXL: mixture(gray,o5),
  black: black,
  blackH: mixture(black,o75),
  blackM: mixture(black,o50),
  blackL: mixture(black,o25),
  blackXL: mixture(black,o5),
  black: dark,
  blackShadow: mixture(dark,o25),
};

// ------------------------------------ Decoration Colors
export const decoColors = {
  white: white,
  whiteH: mixture(white,o75),
  whiteM: mixture(white,o50),
  whiteL: mixture(white,o25),
  gray: gray,
  grayH: mixture(gray,o75),
  grayM: mixture(gray,o50),
  grayL: mixture(gray,o25),
  grayXL: mixture(gray,o5),
  black: black,
  blackH: mixture(black,o75),
  blackM: mixture(black,o50),
  blackL: mixture(black,o25),
  blackXL: mixture(black,o5),
  standby: mixture(black,o40),
  border: alternate,
  borderSecond: principal,
  shadow: mixture(alternate,o20),
  hover: alternate,
  hoverSecond: principal,
  shadowHover: mixture(principal,o70),
};

// ------------------------------------ Organization Colors
export const orgColors = {
  primary: alternate,
  secondary: principal,

  secondary_t8: mixture(principal,o80),
};

// ------------------------------------ Organization Colors
export const fontColors = {
  white: white,
  whiteH: mixture(black,o80),
  whiteM: mixture(black,o50),
  whiteL: mixture(black,o20),
  gray: gray,
  grayH: mixture(gray,o80),
  grayM: mixture(gray,o50),
  grayL: mixture(gray,o20),
  black: black,
  blackH: mixture(black,o80),
  blackM: mixture(black,o50),
  blackL: mixture(black,o20),
  primary: alternate,
  secondary: principal,
};

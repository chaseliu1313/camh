export const PrimaryColor = '#6E298D';

export const SecondaryColor_Bro = '#AB8876';
export const SecondaryColor_Yel = '#FFB652';
export const SecondaryColor_Blu = '#63B1E5';
export const SecondaryColor_Tel = '#00A39B';

export const SecondaryColor_Blk = '#1E1E1E';

export const TertiaryColor_Bro = '#d2c1b7';
export const TertiaryColor_Yel = '#ffd6a2';
export const TertiaryColor_Blu = '#b5d3eb';
export const TertiaryColor_Tel = '#7ac3cc';

export const BackgroundColor = '#F7F7F7';

export const DarkPurple = '#4A1961';

export const Correct_G = '#17b978';
export const Correct_G_Hover = '#086972';
export const Error_R = '#ff304f';
export const Error_R_Hover = '#e41749';

export const PrimaryGradient = [
  PrimaryColor,
  '#682685',
  '#62237E',
  '#5C2177',
  '#561E6F',
  '#501B68',
  DarkPurple,
];

export const fontSize = {
  subtext2: '14px',
  subtext: '18px',
  p: '21px',
  subTitle: '23px',
  title2: '28px',
  title: '46px',
};

const colorPaletteSecondary = [
  SecondaryColor_Tel,
  SecondaryColor_Yel,
  SecondaryColor_Blu,
  SecondaryColor_Bro,
];
const colorPaletteTertiary = [
  TertiaryColor_Tel,
  TertiaryColor_Yel,
  TertiaryColor_Blu,
  TertiaryColor_Bro,
];

export const colorPalette = (plate) => {
  let min = Math.ceil(0);
  let max = Math.floor(3);
  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  if (plate === 2) {
    return colorPaletteSecondary[random];
  } else if (plate === 3) {
    return colorPaletteTertiary[random];
  } else {
    let all = [...colorPaletteSecondary, ...colorPaletteTertiary];
    let r = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
    return all[r];
  }
};

export const margin = 16;

//media queries
export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

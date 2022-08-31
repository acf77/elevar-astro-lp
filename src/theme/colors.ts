export const colors = {
  neutrals: {
    white: "#FFF",
    offwhite: "#f7f7f7",
    input: "#ededed",
    divider: "#E3E3E3",
    asset: "#B2B2B2",
    disabled: "#999999",
    info: "#707070",
    body: "#404040",
    text: "#4F4F4F",
    placeholder: "#737373",
    title: "#222222",
  },
  primary: [
    "#FAF9FA", // 1
    "#F4F2F8", // 2
    "#ded7ea", // 3
    "#a793c7", // 4
    "#8c72b6", // 5
    "#7153A1", // 6
    "#5a4280", // 7
    "#42315e", // 8
    "#36284d", // 9
    "#2a1f3c", // 10 Not in the original color scheme but used nontheless
  ],
  accentGreen: [
    "#eef6f1",
    "#d7eadd",
    "#b5d9c1",
    "#93c7a5",
    "#72b688",
    "#53A16E",
    "#428057",
    "#315E40",
    "#23432E",
  ],
  accentYellow: [
    "#FDF8E7", //
    "#faebbd", //
    "#f6de8e", //
    "#f2d05f", //
    "#eec22f", //
    "#d9aa12", //
    "#aa850e", //
    "#7b600a", //
    "#5e4a08", //
  ],
  accentRed: [
    "#f9f1f1",
    "#edd4d4",
    "#deafaf",
    "#d08b8b",
    "#c16767",
    "#ad4747",
    "#8a3838",
    "#652929",
    "#481e1e",
  ],
  accentBlue: [
    "#EBEFF4",
    "#D7E0EA",
    "#B5C5D9",
    "#93ABC7",
    "#7291B6",
    "#5377A1",
    "#425E80",
    "#31455E",
    "#233143",
  ],
  getPrimary: function (num) {
    return this.primary[num - 1];
  },
  getPrimaryBase: function () {
    return this.primary[6];
  },
  getAccent: function (num) {
    return this.accent[num - 1];
  },
  getAccentBase: function () {
    return this.accent[5];
  },
  getAccentYellow: function (num) {
    return this.accentYellow[num - 1];
  },
  getAccentYellowBase: function () {
    return this.accentYellow[5];
  },
  getAccentRed: function (num) {
    return this.accentRed[num - 1];
  },
  getAccentRedBase: function () {
    return this.accentRed[5];
  },
  getAccentBlue: function (num) {
    return this.accentBlue[num - 1];
  },
  getAccentGreen: function (num) {
    return this.accentGreen[num - 1];
  },
  getAccentBlueBase: function () {
    return this.accentRed[5];
  },
};

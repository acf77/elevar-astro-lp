import { breakpoints } from "../../../theme/breakpoints";
import { colors } from "../../../theme/colors";

export const displayTextStyle = {
  fontFamily: "Metropolis Bold",
  fontWeight: "700",
  fontSize: "72px",
  lineHeight: "80px",
  letterSpacing: "-2px",
  margin: "0px",

  // @media (max-width: 1024px) {
  //   font-size: 48px;
  //   line-height: 54px;
  // }

  // @media (max-width: 425px) {
  //   font-size: 34px;
  //   line-height: 38px;
  // }
};

export const displayTextStyleColor = {
  ...displayTextStyle,
  color: colors.getAccentYellow(6),
};

import { colors } from "../../theme/colors";

type StyleProps = {
  mobile: boolean;
};

const styles = {
  root: {
    // background:
    //   "linear-gradient(180deg, #DED7EA 0%, rgba(244, 242, 248, 0.8) 30%, rgba(255, 255, 255, 0) 100%)",
    height: "100%",
    overflow: "hidden",
    ["@media (max-width: 1024px)"]: {
      // background:
      //   "linear-gradient(180deg, #DED7EA 0%, rgba(244, 242, 248, 0.8) 30%, rgba(255, 255, 255, 0) 100%)",

      height: "100%",
      padding: "80px 0",
    },
  },
  container: {
    // height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  yellowText: {
    color: colors.getAccentYellow(6),
  },
  subtitleBannerText: ({ mobile }: StyleProps): object => {
    return {
      color: colors.getPrimary(9),
      marginTop: "0.9rem",
      marginBottom: mobile ? "-100px" : "48px",
      fontSize: mobile ? "14px" : "18px",
    };
  },
  pointerTextWrap: {
    position: "relative",
    ["@media (max-width: 780px)"]: {
      // justifyContent: "space-between",
      ["& > *"]: {
        width: "100%",
      },
    },
  },
  pointerText: {
    position: "absolute",
    right: 0,
    display: "flex",
    flexDirection: "row",
    ["@media (max-width: 1024px)"]: {
      right: "initial",
      left: "12px",
    },
  },
  arrowIcon: {
    width: "40px",
    height: "40px",
    ["@media (max-width: 780px)"]: {
      width: "28px",
      height: "28px",
    },
  },
  btnCaption: {
    position: "absolute",
    left: "48px",
    top: "12px",
    fontSize: "28px",
    paddingRight: "5px",
    whiteSpace: "nowrap",
    color: colors.getPrimary(6),
    ["@media (max-width: 780px)"]: {
      left: "36px",
    },
  },
  bannerCell: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    ["@media (max-width: 990px)"]: {
      flexDirection: "column-reverse",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
};

export default styles;
